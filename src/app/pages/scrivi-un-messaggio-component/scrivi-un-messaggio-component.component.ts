import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessario per *ngIf
import { FormsModule } from '@angular/forms'; // FormsModule è ancora utile per i controlli del form, ma non useremo NgForm esplicitamente per il reset del form.
import emailjs from 'emailjs-com';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  onSubmit(event: Event) {
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    
    // Prepariamo l'oggetto per il backend
    const contactData = {
      userEmail: formData.get('user_email'),
      message: formData.get('message')
    };

    this.http.post('http://localhost:8080/api/contact/send', contactData)
      .subscribe({
        next: () => {
          this.messageSent = true;
          this.errorMessage = '';
          formElement.reset();
        },
        error: (err) => {
          this.messageSent = false;
          this.errorMessage = "Errore del server: riprova più tardi.";
        }
    });
  }
}