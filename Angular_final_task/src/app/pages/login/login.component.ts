import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { identifier: '', password: '' };
  errorMessage = '';

  constructor(private router: Router) {}

  login() {
    // Dummy authentication (replace with actual API call)
    if ((this.user.identifier === 'test@example.com' || this.user.identifier === '1234567890') 
        && this.user.password === 'password123') {
      localStorage.setItem('isLoggedIn', 'true'); // Store session
      this.router.navigate(['/dashboard']); // Redirect after login
    } else {
      this.errorMessage = 'Invalid email/phone or password.';
    }
  }
}
