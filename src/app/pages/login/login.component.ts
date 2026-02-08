import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginData = { email: '', password: '' };
  private readonly AUTH_URL = `http://localhost:8080/api/auth`;

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.http.post(`${this.AUTH_URL}/login`, this.loginData)
      .pipe(
        tap((res: any) => {
          localStorage.setItem("ACCESS_TOKEN", res.accessToken);
          localStorage.setItem("REFRESH_TOKEN", res.refreshToken);
        })
      )
      .subscribe({
        next: () => this.router.navigate(['/dashboard']),
        error: () => alert("Credenziali non valide")
      });
  }
}