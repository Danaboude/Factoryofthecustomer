import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-smart-model',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './smart-model.component.html',
    styleUrl: './smart-model.component.css'
})
export class SmartModelComponent implements AfterViewInit {
    @ViewChildren('animatedItem') animatedItems!: QueryList<ElementRef>;

    ngAfterViewInit() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-visible');
                    observer.unobserve(entry.target);
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
