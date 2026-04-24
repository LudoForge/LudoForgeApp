import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  // Signal per lo stato: la Navbar reagirà istantaneamente a questo
  isLoggedIn = signal<boolean>(false);

  constructor() {
    // Controlla il localStorage SOLO quando siamo nel browser (idratazione)
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('ACCESS_TOKEN');
      if (token) {
        this.isLoggedIn.set(true);
      }
    }
  }

  private checkInitialAuth(): boolean {
    // Evita l'errore "localStorage is not defined" durante l'SSR
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('ACCESS_TOKEN');
    }
    return false;
  }

  loginSuccess(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('ACCESS_TOKEN', token);
      this.isLoggedIn.set(true); // Trigger reattivo per la Navbar
    }
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('ACCESS_TOKEN');
      this.isLoggedIn.set(false);
      this.router.navigate(['/login']);
    }
  }

  private hasToken(): boolean {
    // Controlla se siamo nel browser prima di toccare localStorage
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('ACCESS_TOKEN');
    }
    return false;
  }
}