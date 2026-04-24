import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
// Importa il tuo AuthService
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr'; 

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

  // Inietta AuthService
  constructor(
    private http: HttpClient, 
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  onLogin() {
    this.http.post(`${this.AUTH_URL}/login`, this.loginData).subscribe({
      next: (res: any) => {
        // Aggiorna lo stato globale tramite il service
        this.authService.loginSuccess(res.token); 
        this.router.navigate(['/dashboard']);
      },
      error: () => this.toastr.error("Credenziali non valide", "Errore")
    });
  }

  sendEmail() {
    if (!this.loginData.email) {
      this.toastr.warning('Inserisci la tua email nel campo sopra per recuperare la password', 'Attenzione');
      return;
    }

    this.http.post(`${this.AUTH_URL}/forgot-password?email=${this.loginData.email}`, {})
      .subscribe({
        next: () => this.toastr.info('Controlla la tua casella di posta!', 'Email Inviata'),
        error: () => this.toastr.error('Impossibile inviare la mail. L\'utente esiste?', 'Errore')
      });
  }
}