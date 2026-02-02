import { Component, OnInit, signal } from '@angular/core';
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

    ngOnInit() {
        this.selectRandomVideo();
    }

    selectRandomVideo() {
        // Videos are 1.mp4 to 10.mp4 in 'new book' folder
        const randomIndex = Math.floor(Math.random() * 10) + 1;
        this.videoSource.set(`/new book/${randomIndex}.mp4`);
    }
}
