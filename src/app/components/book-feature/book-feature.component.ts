import { Component, OnInit, signal, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-book-feature',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './book-feature.component.html',
    styleUrl: './book-feature.component.css'
})
export class BookFeatureComponent implements OnInit {
    protected videoSource = signal<string>('');
    protected videoLoading = signal(true);

    @ViewChild('bookVideo') set bookVideo(content: ElementRef<HTMLVideoElement>) {
        if (content && content.nativeElement) {
            content.nativeElement.muted = true;
            content.nativeElement.play().catch(err => {
                console.warn('Book video autoplay failed:', err);
            });

            // If already loaded
            if (content.nativeElement.readyState >= 3) {
                this.videoLoading.set(false);
            }
        }
    }

    onVideoLoad() {
        this.videoLoading.set(false);
    }

    ngOnInit() {
        this.selectRandomVideo();
    }

    selectRandomVideo() {
        // Videos are 1.mp4 to 10.mp4 in 'new book' folder
        const randomIndex = Math.floor(Math.random() * 10) + 1;
        this.videoSource.set(`/new book/${randomIndex}.mp4`);
    }
}
