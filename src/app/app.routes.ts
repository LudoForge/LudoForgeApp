import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ContattiComponent } from '../pages/contatti/contatti.component';
import { ChisiamoComponent } from '../pages/chisiamo/chisiamo.component';
import { RenderMode } from '@angular/ssr';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contatti', component: ContattiComponent },
  { path: 'chi-siamo', component: ChisiamoComponent }, 
];