import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  offers = [
    { title: 'Weekend Escape', description: 'Flat 25% off on weekend bookings!' },
    { title: 'Monthly Saver', description: 'Rent for a month & save up to 30%!' }
  ];

  constructor(private router: Router) {}

  navigateToRental() {
    this.router.navigate(['/available-cars']);
  }
}
