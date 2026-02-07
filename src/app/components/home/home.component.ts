import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';

import { BookFeatureComponent } from '../book-feature/book-feature.component';
import { QuotesComponent } from '../quotes/quotes.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        HeroComponent,

        BookFeatureComponent,
        QuotesComponent
    ],
    templateUrl: './home.component.html',
})
export class HomeComponent { }
