import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/items']); 
    } else {
      this.errorMessage = 'Credenciais inválidas!';
    }
  }
  logout(): void {
    this.authService.logout(); 
    this.router.navigate(['/login']); 
  }
  
}

