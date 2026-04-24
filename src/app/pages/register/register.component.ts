import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; // 👈 Importa HttpClient qui
import { ToastrService } from 'ngx-toastr';

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

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {} // 👈 Inietta HttpClient e ToastrService

  onSubmit() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      this.toastr.error("Le password non coincidono!", "Errore");
      return;
    }

    this.http.post('http://localhost:8080/api/auth/register', {
      email: this.registerData.email,
      password: this.registerData.password
    }).subscribe({
      next: () => {
        this.toastr.success("Registrazione completata!", "Successo");
        this.router.navigate(['/login']);
      },
      error: (err) => this.toastr.error("Errore: " + (err.error?.message || "Impossibile registrarsi"), "Errore")
    });
  }
}