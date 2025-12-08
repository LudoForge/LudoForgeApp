import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { ContattiComponent } from './pages/contatti/contatti.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, ContattiComponent],
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
}
