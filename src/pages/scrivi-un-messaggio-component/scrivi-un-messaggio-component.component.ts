import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessario per *ngIf
import { FormsModule } from '@angular/forms'; // FormsModule è ancora utile per i controlli del form, ma non useremo NgForm esplicitamente per il reset del form.
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-scrivi-un-messaggio-component',
  standalone: true, // Componente standalone
  imports: [
    CommonModule, // Importa CommonModule per *ngIf
    FormsModule   // Mantiene FormsModule per le direttive del form (es. ngModel implicito se lo usassi)
  ],
  templateUrl: './scrivi-un-messaggio-component.component.html',
  styleUrls: ['./scrivi-un-messaggio-component.component.scss']
})
export class ScriviUnMessaggioComponentComponent {
  messageSent = false;
  errorMessage = '';

  // Il parametro ora è di tipo Event (o SubmitEvent se vuoi essere più specifico)
  onSubmit(event: Event) {
    // Assicurati che l'evento provenga da un form HTML
    const formElement = event.target as HTMLFormElement;

    // Aggiungi un controllo per sicurezza
    if (!formElement || formElement.tagName !== 'FORM') {
      this.errorMessage = 'Errore: elemento form non trovato.';
      return;
    }

    emailjs.sendForm(
      'service_xxx',
      'template_xxx',
      formElement, // Passa l'elemento HTML del form direttamente
      'user_xxx'
    ).then(
      () => {
        this.messageSent = true;
        this.errorMessage = '';
        formElement.reset(); // Usa il metodo reset() dell'elemento HTML del form
      },
      (error) => {
        this.messageSent = false;
        this.errorMessage = 'Errore durante l\'invio: ' + error.text;
      }
    );
  }
}