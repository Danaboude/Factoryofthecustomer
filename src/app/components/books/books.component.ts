import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BOOKS } from '../../data/books';

@Component({
    selector: 'app-books',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent {
    books = BOOKS;
}
