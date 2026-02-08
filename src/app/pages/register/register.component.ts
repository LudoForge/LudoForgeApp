import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; // 👈 Importa HttpClient qui

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerData = { email: '', password: '', confirmPassword: '' };
  private readonly AUTH_URL = `http://localhost:8080/api/auth`;

  constructor(private http: HttpClient, private router: Router) {} // 👈 Inietta HttpClient

  onSubmit() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert("Le password non coincidono!");
      return;
    }

    this.http.post('http://localhost:8080/api/auth/register', {
      email: this.registerData.email,
      password: this.registerData.password
    }).subscribe({
      next: () => {
        alert("Registrazione completata!");
        this.router.navigate(['/login']);
      },
      error: (err) => alert("Errore: " + (err.error?.message || "Impossibile registrarsi"))
    });
  }
}