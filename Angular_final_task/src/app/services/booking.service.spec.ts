import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor() {}

  getBookings(): Observable<any[]> {
    return of([
      { id: 1, name: 'John Doe', email: 'john@example.com', car: 'Toyota', days: 3 },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', car: 'Honda', days: 5 },
      { id: 3, name: 'Alice Brown', email: 'alice@example.com', car: 'BMW', days: 2 },
      { id: 4, name: 'Bob Johnson', email: 'bob@example.com', car: 'Ford', days: 4 },
      { id: 5, name: 'Eve Wilson', email: 'eve@example.com', car: 'Mercedes', days: 7 },
      { id: 6, name: 'Charlie Green', email: 'charlie@example.com', car: 'Audi', days: 1 }
    ]);
  }
}
