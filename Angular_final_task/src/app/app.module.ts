import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AvailableCarsComponent } from './pages/available-cars/available-cars.component';
import { RentalTakenComponent } from './pages/rental-taken/rental-taken.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CarService } from './services/car.service';
import { HttpClientModule } from '@angular/common/http';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { Contact1Component } from './pages/contact1/contact1.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AvailableCarsComponent,
    RentalTakenComponent,
   
    CarListComponent,
    BookingComponent,
    ContactComponent,
    PrivacyComponent,
    TermsComponent,
    Contact1Component,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
