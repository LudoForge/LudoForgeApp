import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ContattiComponent } from '../contatti/contatti.component';
import { Router, RouterModule } from '@angular/router';
import {RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

declare const paypal: any;

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterModule, RouterLink] 
})
export class HomeComponent implements OnInit, AfterViewInit {

  visitCount: number = 0;
  buyerCount: number = 124;

  prodotto = {
    id: 'ludo-001',
    nome: 'Manuale LudoForge',
    prezzo: 29.99
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (!sessionStorage.getItem('sessionVisited')) {
        let currentCount = parseInt(localStorage.getItem('visitorCount') || '0', 10);
        currentCount++;
        localStorage.setItem('visitorCount', currentCount.toString());
        sessionStorage.setItem('sessionVisited', 'true');
      }

      this.visitCount = parseInt(localStorage.getItem('visitorCount') || '0', 10);
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const interval = setInterval(() => {
        if (typeof paypal !== 'undefined') {
          paypal.Buttons({
            createOrder: (data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [{
                  amount: { value: '29.90' }
                }]
              });
            },
            onApprove: (data: any, actions: any) => {
              return actions.order.capture().then((details: any) => {
                this.toastr.success('Grazie ' + details.payer.name.given_name + '! Il tuo ordine è stato completato.', 'Successo');
              });
            }
          }).render('#paypal-button-container');
          clearInterval(interval);
        }
      }, 300);
    }
  }

  vaiAlCheckout() {
    // Navighiamo alla pagina acquista passando i dati nello stato della rotta
    this.router.navigate(['/acquista'], { 
      state: { data: this.prodotto } 
    });
  }

}
