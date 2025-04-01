import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service'; // ✅ Correct relative path
import { Car } from '../../models/car.model'; // ✅ Correct relative path

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }
}
