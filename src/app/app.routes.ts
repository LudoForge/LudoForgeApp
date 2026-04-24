import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { ChisiamoComponent } from './pages/chisiamo/chisiamo.component';
import { RenderMode } from '@angular/ssr';
import { RecensioniComponent } from './pages/recensioni/recensioni.component';
import { ScriviUnMessaggioComponentComponent } from './pages/scrivi-un-messaggio-component/scrivi-un-messaggio-component.component';
import { DungeoncrawlerComponent } from './pages/dungeoncrawler/dungeoncrawler.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ConfirmAccountComponent } from './pages/confirm-account/confirm-account.component';
import { AcquistaComponent } from './pages/acquista/acquista.component';
import { ListaOrdiniComponent } from './pages/lista-ordini/lista-ordini.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'scrivi-un-messaggio', component: ScriviUnMessaggioComponentComponent },
  { path: 'chi-siamo', component: ChisiamoComponent }, 
  { path: 'recensioni', component: RecensioniComponent },
  { path: 'dungeoncrawler', component: DungeoncrawlerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'confirm-account', component: ConfirmAccountComponent },
  { path: 'acquista', component: AcquistaComponent },
  { path: 'ordini', component: ListaOrdiniComponent},
  { path: 'impostazioni', component: SettingsComponent }
];