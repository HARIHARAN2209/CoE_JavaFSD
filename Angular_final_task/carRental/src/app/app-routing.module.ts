import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AvailableCarsComponent } from './pages/available-cars/available-cars.component';
import { RentalTakenComponent } from './pages/rental-taken/rental-taken.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { BookingComponent } from './pages/booking/booking.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Contact1Component } from './pages/contact1/contact1.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'available-cars', component: AvailableCarsComponent },
  { path: 'rental-taken', component: RentalTakenComponent },
  { path: 'cars', component: CarListComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'car-listings', component: CarListComponent },
  { path: 'book-car/:id', component: BookingComponent }, // Route with Car ID
  { path: '', redirectTo: '/car-listings', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default to Login
  { path: '**', redirectTo: 'login' },
  { path: 'contact', component: Contact1Component },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
