import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // 1. Recuperiamo il token dal localStorage (o dove lo hai salvato dopo il login)
  const token = localStorage.getItem('auth_token');

  // 2. Se il token esiste, cloniamo la richiesta aggiungendo l'Header Authorization
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }

  // 3. Se non c'è il token, la richiesta procede normalmente
  return next(req);
};