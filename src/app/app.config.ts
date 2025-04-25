import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]), // ← metti qui le tue route
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(withEventReplay()),
    importProvidersFrom(NgbModule) // ← ✅ AGGIUNTO QUI
  ]
};