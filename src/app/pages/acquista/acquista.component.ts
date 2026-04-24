import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

declare var paypal: any; // Dichiara l'oggetto globale PayPal

@Component({
  selector: 'app-acquista',
  standalone: true,
  templateUrl: './acquista.component.html',
  styleUrl: './acquista.component.scss'
})
export class AcquistaComponent implements OnInit {
  prodottoScelto: any;

  constructor(private router: Router, private http: HttpClient, private toastr: ToastrService) {
    const navigation = this.router.getCurrentNavigation();
    this.prodottoScelto = navigation?.extras.state?.['data'];
  }

  ngOnInit() {
    if (this.prodottoScelto) {
      this.renderPaypalButton();
    }
  }

  renderPaypalButton() {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            description: this.prodottoScelto.nome,
            amount: {
              value: this.prodottoScelto.prezzo.toString()
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          this.toastr.success('Pagamento completato da ' + details.payer.name.given_name, 'Successo');
          // Qui puoi chiamare il tuo backend Java per segnare l'ordine come "Pagato"
          this.router.navigate(['/conferma-ordine']);
        });
      },
      onError: (err: any) => {
        console.error('Errore PayPal:', err);
      }
    }).render('#paypal-button-container');
  }

  pagaConBonifico() {
    // Logica per mostrare l'IBAN o mandare una mail
    const datiOrdine = {
    productName: this.prodottoScelto.nome,
    price: this.prodottoScelto.prezzo,
    email: this.prodottoScelto.email // Prendi la mail dell'utente loggato
  };

  this.http.post('http://localhost:8080/api/orders/init', datiOrdine)
    .subscribe({
      next: (res: any) => {
        this.toastr.info("Ordine registrato! Controlla la mail per i dati del bonifico.", "Informazione");
        this.router.navigate(['/ordini']);
      },
      error: (err) => {
        this.toastr.error("Errore nella creazione dell'ordine.", "Errore");
        console.log("Errore creazione ordine", err);
      }
    });
  }
}