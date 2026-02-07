import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SmartModelComponent } from '../smart-model/smart-model.component';

@Component({
    selector: 'app-differentiation',
    standalone: true,
    imports: [CommonModule, RouterModule, SmartModelComponent],
    templateUrl: './differentiation.component.html',
    styleUrl: './differentiation.component.css'
})
export class DifferentiationComponent implements AfterViewInit {
    @ViewChildren('animatedItem') animatedItems!: QueryList<ElementRef>;

    ngAfterViewInit() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, {
            threshold: 0.1
        });

        this.animatedItems.forEach(item => {
            observer.observe(item.nativeElement);
        });
    }
}
