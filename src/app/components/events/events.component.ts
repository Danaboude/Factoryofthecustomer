import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

interface EventData {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    location: string;
    price: number;
    stripePrice: number; // in cents
}

@Component({
    selector: 'app-events',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
    isLoading: { [key: string]: boolean } = {};
    activeForm: string | null = null;
    showSuccessMessage = false;

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params['success'] === 'true') {
                this.showSuccessMessage = true;
                // Optional: Clean up the URL
                this.router.navigate([], {
                    queryParams: { success: null },
                    queryParamsHandling: 'merge',
                    replaceUrl: true
                });
            }
        });
    }

    closeSuccessMessage() {
        this.showSuccessMessage = false;
    }

    events: EventData[] = [
        {
            id: 'presentation-sint-niklaas',
            title: 'Book Presentation',
            subtitle: 'The Customer’s Truffle',
            date: '11/3/2026',
            location: 'Sint Niklaas',
            price: 85,
            stripePrice: 8500
        },
        {
            id: 'presentation-genk',
            title: 'Book Presentation',
            subtitle: 'The Customer’s Truffle',
            date: '20/3/2026',
            location: 'Genk',
            price: 85,
            stripePrice: 8500
        },
        {
            id: 'training-day',
            title: 'Training Day',
            subtitle: '3 directions: The Customer’s Truffle',
            date: '10/4/2026',
            location: 'Factory of the Customer',
            price: 550, // Display base price or logic for early bird
            stripePrice: 55000 // Default to early bird for now or implement dynamic logic
        }
    ];

    // Registration Form Data
    registrationData = {
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        vat: '',
        invoice: false
    };

    toggleRegister(eventId: string) {
        if (this.activeForm === eventId) {
            this.activeForm = null;
        } else {
            this.activeForm = eventId;
            // Reset form when opening a new one
            this.registrationData = {
                firstName: '',
                lastName: '',
                email: '',
                company: '',
                vat: '',
                invoice: false
            };
        }
    }

    async onRegister(event: EventData) {
        this.isLoading[event.id] = true;

        // Simple Validation
        if (!this.registrationData.email || !this.registrationData.firstName || !this.registrationData.lastName) {
            alert('Please fill in your Name and Email address.');
            this.isLoading[event.id] = false;
            return;
        }

        try {
            // Determine price for Training Day based on date if needed (simplified for now)
            let finalPrice = event.stripePrice;
            let productName = `${event.title}: ${event.subtitle} (${event.location})`;

            // Training day pricing logic
            if (event.id === 'training-day') {
                const today = new Date();
                const earlyBirdCutoff = new Date('2026-04-01');
                if (today > earlyBirdCutoff) {
                    finalPrice = 60000; // 600 EUR
                } else {
                    finalPrice = 55000; // 550 EUR
                }
            }

            const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${environment.stripeSecretKey}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'payment_method_types[]': 'card',
                    'line_items[0][price_data][currency]': 'eur',
                    'line_items[0][price_data][product_data][name]': productName,
                    'line_items[0][price_data][unit_amount]': finalPrice.toString(),
                    'line_items[0][quantity]': '1',
                    'mode': 'payment',
                    'success_url': `${window.location.origin}/events?success=true`,
                    'cancel_url': `${window.location.origin}/events?canceled=true`,
                    'customer_email': this.registrationData.email,

                    // Payment Intent Data
                    'payment_intent_data[description]': `Registration for ${event.title} (${event.date}) - ${this.registrationData.firstName} ${this.registrationData.lastName}`,
                    'payment_intent_data[metadata][firstName]': this.registrationData.firstName,
                    'payment_intent_data[metadata][lastName]': this.registrationData.lastName,
                    'payment_intent_data[metadata][company]': this.registrationData.company,
                    'payment_intent_data[metadata][vat]': this.registrationData.vat,
                    'payment_intent_data[metadata][invoiceRequested]': this.registrationData.invoice ? 'Yes' : 'No',
                    'payment_intent_data[metadata][event]': event.title,
                    'payment_intent_data[metadata][eventDate]': event.date,
                    'payment_intent_data[metadata][eventLocation]': event.location
                })
            });

            const session = await response.json();

            if (session.error) {
                alert('Payment Error: ' + session.error.message);
                this.isLoading[event.id] = false;
                return;
            }

            // Redirect to Stripe Checkout
            window.location.href = session.url;

        } catch (err) {
            console.error('Stripe Error:', err);
            alert('Something went wrong. Please try again.');
            this.isLoading[event.id] = false;
        }
    }
}
