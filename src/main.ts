import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config'; // 👈 Importa la configurazione globale

bootstrapApplication(AppComponent, appConfig) // 👈 Usa appConfig qui
  .catch((err) => console.error(err));