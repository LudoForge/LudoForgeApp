import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LudoForgeApp';

  showCookieBanner = true;
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const accepted = localStorage.getItem('cookiesAccepted');
      this.showCookieBanner = accepted !== 'true' && accepted !== 'false'; // mostra solo se non ha ancora scelto
    }
  }

  //al momento va bene ma in futuro accettane di più
  accettaCookie() {
    this.showCookieBanner = false;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookiesAccepted', 'true');
    }
    // qui potresti inizializzare Google Analytics, etc.
  }

  rejectCookies() {
    this.showCookieBanner = false;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookiesAccepted', 'false');
    }
    // non attivare strumenti di tracciamento
  }
}