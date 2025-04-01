import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = [
    { id: 1, name: 'Toyota Corolla', brand: 'Toyota', pricePerDay: 50, image: 'assets/toyota.jpg' },
    { id: 2, name: 'Honda Civic', brand: 'Honda', pricePerDay: 55, image: 'assets/honda.jpg' },
    { id: 3, name: 'BMW X5', brand: 'BMW', pricePerDay: 120, image: 'assets/bmw.jpg' }
  ];

  getCars(): Observable<Car[]> {
    return of(this.cars);
  }
}

