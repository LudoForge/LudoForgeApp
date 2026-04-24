import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-confirm-account',
  standalone: true, // Fondamentale in Angular 19
  imports: [], // Non serve più CommonModule per usare @if!
  templateUrl: './confirm-account.component.html',
  styleUrl: './confirm-account.component.scss'
})
export class ConfirmAccountComponent implements OnInit {
  statusMessage = 'Verifica del token...';
  loading = true;

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient, 
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get('token');

    if (token) {
      // Nota: assicurati che l'URL del backend sia corretto
      this.http.get(`http://localhost:8080/api/auth/confirm?token=${token}`, { responseType: 'text' })
        .subscribe({
          next: (response) => {
            this.statusMessage = response; 
            this.loading = false;
          },
          error: (err) => {
            this.statusMessage = "Errore: il link non è valido o è scaduto.";
            this.loading = false;
          }
        });
    } else {
      this.statusMessage = "Token mancante nel link.";
      this.loading = false;
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}