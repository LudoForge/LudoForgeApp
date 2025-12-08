import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';  // ✅ mancava
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private accessKey = "ACCESS_TOKEN";
  private refreshKey = "REFRESH_TOKEN";

  constructor(private http: HttpClient) {}  // ✅ mancava il costruttore

  login(email: string, password: string) {
    return this.http.post("/api/auth/login", { email, password }).pipe(
      tap((res: any) => {
        localStorage.setItem(this.accessKey, res.accessToken);
        localStorage.setItem(this.refreshKey, res.refreshToken);
      })
    );
  }

  refreshAccessToken() {
    const token = localStorage.getItem(this.refreshKey);
    return this.http.post("/api/auth/refresh", { refreshToken: token }).pipe(
      tap((res: any) => localStorage.setItem(this.accessKey, res.accessToken))
    );
  }
}

