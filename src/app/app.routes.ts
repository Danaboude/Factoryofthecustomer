import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookPageComponent } from './components/book-page/book-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'books', loadComponent: () => import('./components/books/books.component').then(m => m.BooksComponent) },
    { path: 'book/:id', component: BookPageComponent },
    { path: 'content', loadComponent: () => import('./components/differentiation/differentiation.component').then(m => m.DifferentiationComponent) },
    { path: 'events', loadComponent: () => import('./components/events/events.component').then(m => m.EventsComponent) },
    { path: 'privacy-policy', loadComponent: () => import('./components/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent) }
];
