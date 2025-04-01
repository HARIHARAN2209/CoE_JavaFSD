import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfo = {
    address: '123 Main Street, New York, USA',
    phone: '+1 234 567 890',
    email: 'support@carrental.com'
  };

  socialLinks = [
    { name: 'Facebook', icon: '🌐', url: 'https://facebook.com' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com' }
  ];

  reviews = [
    { name: 'John Doe', text: 'Amazing service! Highly recommended.' },
    { name: 'Jane Smith', text: 'Cars were in excellent condition.' },
    { name: 'Mark Wilson', text: 'Quick and easy booking process.' }
  ];

  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitted = false;

  submitForm() {
    console.log('Form Submitted:', this.formData);
    this.isSubmitted = true;
  }
}
