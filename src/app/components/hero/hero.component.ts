import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit {
    @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

    ngAfterViewInit() {
        if (this.heroVideo && this.heroVideo.nativeElement) {
            this.heroVideo.nativeElement.muted = true;
            this.heroVideo.nativeElement.play().catch(err => {
                console.warn('Hero video autoplay failed:', err);
            });
        }
    }
}
