import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { DifferentiationComponent } from '../differentiation/differentiation.component';
import { SmartModelComponent } from '../smart-model/smart-model.component';
import { BookFeatureComponent } from '../book-feature/book-feature.component';
import { QuotesComponent } from '../quotes/quotes.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        HeroComponent,
        DifferentiationComponent,
        SmartModelComponent,
        BookFeatureComponent,
        QuotesComponent
    ],
    templateUrl: './home.component.html',
})
export class HomeComponent { }
