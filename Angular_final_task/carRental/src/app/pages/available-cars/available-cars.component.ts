import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-available-cars',
  templateUrl: './available-cars.component.html',
  styleUrls: ['./available-cars.component.css']
})
export class AvailableCarsComponent {
  cars = [
    { name: 'Sedan X', price: '$50/day', image: 'assets/cars/sedan.jpg' },
    { name: 'SUV Y', price: '$70/day', image: 'assets/cars/suv.jpg' },
    { name: 'Hatchback Z', price: '$40/day', image: 'assets/cars/hatchback.jpg' },
    { name: 'Convertible A', price: '$90/day', image: 'assets/cars/convertible.jpg' }
  ];
  
  constructor(private router: Router) {}

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}