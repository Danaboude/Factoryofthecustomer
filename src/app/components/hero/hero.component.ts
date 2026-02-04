import { Component, AfterViewInit, ViewChild, ElementRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit {
    @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
    protected videoLoading = signal(true);

    onVideoLoad() {
        this.videoLoading.set(false);
    }

    ngAfterViewInit() {
        if (this.heroVideo && this.heroVideo.nativeElement) {
            this.heroVideo.nativeElement.muted = true;
            this.heroVideo.nativeElement.play().catch(err => {
                console.warn('Hero video autoplay failed:', err);
            });

            // If already loaded
            if (this.heroVideo.nativeElement.readyState >= 3) {
                this.videoLoading.set(false);
            }
        }
    }
}
