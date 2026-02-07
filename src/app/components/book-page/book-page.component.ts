import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { BOOKS, Book } from '../../data/books';

@Component({
    selector: 'app-book-page',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './book-page.component.html',
})
export class BookPageComponent implements OnInit {
    isLoading = false;
    showSuccessMessage = false;
    book = signal<Book | undefined>(undefined);

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const bookId = params.get('id');
            if (bookId) {
                const foundBook = BOOKS.find(b => b.id === bookId);
                if (foundBook) {
                    this.book.set(foundBook);
                } else {
                    this.router.navigate(['/books']); // Book not found
                }
            } else {
                this.router.navigate(['/books']); // No ID provided
            }
        });


        this.route.queryParams.subscribe(params => {
            if (params['success'] === 'true') {
                this.showSuccessMessage = true;
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

    // Form Model
    purchaseData = {
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        vat: '',
        invoice: false
    };

    async onBuy() {
        const currentBook = this.book();
        if (!currentBook) return;

        this.isLoading = true;

        // Simple Validation
        if (!this.purchaseData.email || !this.purchaseData.firstName || !this.purchaseData.lastName) {
            alert('Please fill in your Name and Email address.');
            this.isLoading = false;
            return;
        }

        try {
            // Create Checkout Session
            // Note: Passing extra metadata to Stripe via a real backend is best, 
            // but here we focus on the required email for receipt.
            const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${environment.stripeSecretKey}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'payment_method_types[]': 'card',
                    'line_items[0][price_data][currency]': 'eur',
                    'line_items[0][price_data][product_data][name]': currentBook.title,
                    'line_items[0][price_data][unit_amount]': Math.round(currentBook.price * 100).toString(), // Price in cents
                    'line_items[0][quantity]': '1',
                    'mode': 'payment',
                    'success_url': `${window.location.origin}/book/${currentBook.id}?success=true`,
                    'cancel_url': `${window.location.origin}/book/${currentBook.id}?canceled=true`,
                    'customer_email': this.purchaseData.email,

                    // Payment Intent Data: Visible on the Transaction in Stripe
                    'payment_intent_data[description]': `Order for ${this.purchaseData.firstName} ${this.purchaseData.lastName} (${this.purchaseData.company || 'Private'}) - Book: ${currentBook.title} - VAT: ${this.purchaseData.vat || 'N/A'}`,
                    'payment_intent_data[metadata][firstName]': this.purchaseData.firstName,
                    'payment_intent_data[metadata][lastName]': this.purchaseData.lastName,
                    'payment_intent_data[metadata][company]': this.purchaseData.company,
                    'payment_intent_data[metadata][vat]': this.purchaseData.vat,
                    'payment_intent_data[metadata][bookId]': currentBook.id,
                    'payment_intent_data[metadata][invoiceRequested]': this.purchaseData.invoice ? 'Yes' : 'No'
                })
            });

            const session = await response.json();

            if (session.error) {
                alert('Payment Error: ' + session.error.message);
                this.isLoading = false;
                return;
            }

            // Redirect to Stripe Checkout
            window.location.href = session.url;

        } catch (err) {
            console.error('Stripe Error:', err);
            alert('Something went wrong. Please try again.');
            this.isLoading = false;
        }
    }
}
