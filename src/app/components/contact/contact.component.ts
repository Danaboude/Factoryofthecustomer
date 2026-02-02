import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './contact.component.html',
})
export class ContactComponent {
    onSubmit(event: Event) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const subject = `New Request from ${formData.get('firstName')} ${formData.get('lastName')}`;
        const body = `Name: ${formData.get('firstName')} ${formData.get('lastName')}
Email: ${formData.get('email')}
Phone: ${formData.get('phone')}

Request:
${formData.get('request')}`;

        window.location.href = `mailto:ivesds@aeriez.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
}
