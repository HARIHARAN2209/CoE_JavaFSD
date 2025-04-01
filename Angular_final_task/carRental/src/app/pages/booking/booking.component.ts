import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookings: any[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe((data) => {
      console.log('Booking data:', data); // Debugging
      this.bookings = data;
    });
  }
}
