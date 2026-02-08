import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';  // ✅ mancava

@Injectable({ providedIn: 'root' })
export class AuthService {
  private accessKey = "ACCESS_TOKEN";
  private refreshKey = "REFRESH_TOKEN";

  constructor(private http: HttpClient) {}  // ✅ mancava il costruttore

  private readonly AUTH_URL = `http://localhost:8080/api/auth`;
  
  login(email: string, password: string) {
    return this.http.post(`${this.AUTH_URL}/login`, { email, password }).pipe(
      tap((res: any) => {
        localStorage.setItem("ACCESS_TOKEN", res.accessToken);
        localStorage.setItem("REFRESH_TOKEN", res.refreshToken);
      })
    );
  }

  register(userData: any) {
    return this.http.post(`${this.AUTH_URL}/register`, userData);
  }

  // Nel tuo AuthService.ts modifica questo metodo:
  refreshAccessToken() {
    const token = localStorage.getItem(this.refreshKey);
  // Usa l'URL dinamico come negli altri metodi
    return this.http.post(`${this.AUTH_URL}/refresh`, { refreshToken: token }).pipe(
      tap((res: any) => localStorage.setItem(this.accessKey, res.accessToken))
  );
  }

  isLoggedIn = signal<boolean>(true); // Metti 'false' per testare quando non è loggato

  logout() {
    this.isLoggedIn.set(false);
    // Qui aggiungerai la logica per pulire il token o chiamare il backend
  }
}

