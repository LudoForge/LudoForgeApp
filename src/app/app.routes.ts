import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ContattiComponent } from '../pages/contatti/contatti.component';
import { ChisiamoComponent } from '../pages/chisiamo/chisiamo.component';
import { RenderMode } from '@angular/ssr';
import { RecensioniComponent } from '../pages/recensioni/recensioni.component';
import { ScriviUnMessaggioComponentComponent } from '../pages/scrivi-un-messaggio-component/scrivi-un-messaggio-component.component';
import { DungeoncrawlerComponent } from '../pages/dungeoncrawler/dungeoncrawler.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'scrivi-un-messaggio', component: ScriviUnMessaggioComponentComponent },
  { path: 'chi-siamo', component: ChisiamoComponent }, 
  { path: 'recensioni', component: RecensioniComponent },
  { path: 'dungeoncrawler', component: DungeoncrawlerComponent }
];