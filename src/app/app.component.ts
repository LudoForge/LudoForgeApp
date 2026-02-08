import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { RouterOutlet, RouterLink } from '@angular/router'; // 👈 Entrambi necessari
import { NavbarComponent } from '../app/pages/navbar/navbar.component'; // Assicurati che il percorso sia giusto

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterModule, CommonModule, ContattiComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LudoForge';
  showCookieBanner = false;
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const accepted = localStorage.getItem('cookiesAccepted');
      this.showCookieBanner = accepted !== 'true' && accepted !== 'false';
    }
  }

/* Esegue i cookie richiamando il backend 
  ngOnInit() {
  this.http.get('/api/cookie/consent', { responseType: 'text' })
    .subscribe(status => {
      this.showCookieBanner = (status === 'unknown');
    });
  }
*/

  accettaCookie() {
    this.showCookieBanner = false;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookiesAccepted', 'true');
    }
  }

  rejectCookies() {
    this.showCookieBanner = false;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookiesAccepted', 'false');
    }
  }

  /* Accetta o rifiuta davvero i cookie
  accettaCookie() {
  this.http.post('/api/cookie/consent', { choice: 'accepted' })
    .subscribe(() => this.showCookieBanner = false);
  }

  rifiutaCookie() {
    this.http.post('/api/cookie/consent', { choice: 'rejected' })
      .subscribe(() => this.showCookieBanner = false);
  }
*/
}
