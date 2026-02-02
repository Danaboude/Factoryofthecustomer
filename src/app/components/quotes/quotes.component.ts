import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Quote {
    text: string;
    author: string;
    title: string;
}

@Component({
    selector: 'app-quotes',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './quotes.component.html',
    styleUrl: './quotes.component.css'
})
export class QuotesComponent {
    protected quotes: Quote[] = [
        {
            text: 'Forget about the "Factory of the Future" with its focus on "must have" techniques. Co-creating in consultation with the customer and focused on speed. … Learn what "The Customer’s Truffle" means in this hands-on book with innovation and clear methodologies.',
            author: 'Luc Semeese',
            title: 'General Manager Volvo Car Chengdu Plant, Vice President Manufacturing Engineering'
        },
        {
            text: 'To be successful in the future, you must be able to change. A successful past is the biggest threat for a company. This is a given, because we have the tendency to keep focus on the success factors of the past while the context is continuously changing... Ives has been successful in bringing "the customer" and "modern technology", giving us the ability to take off for a promising business future.',
            author: 'Edwin Van Vlierberghe',
            title: 'Organizational designer with a focus on "sustainable" improvement in costs, quality, time and quality of work'
        },
        {
            text: 'Fifteen years ago, I described Ives and his team as relentless pigs searching for the most valuable truffles. Now, their main goal is clear: find out what customers want and deliver solutions that meet those needs. As the Factory of the Customer, they connect people, tools, and data to deliver continuous value…',
            author: 'Luigi Neirynck',
            title: 'COO Wallglass, Owner of Scoup BV & founder Santé Belgium'
        }
    ];
}
