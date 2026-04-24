import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  imports: [],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

  token = '';
  newPassword = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit() {
    // Estrae il token dall'URL
    this.token = this.route.snapshot.queryParamMap.get('token') || '';
  }

  confirmReset() {
    this.http.post('http://localhost:8080/api/auth/reset-password', {
      token: this.token,
      newPassword: this.newPassword
    }).subscribe({
      next: () => this.toastr.success("Password cambiata! Ora puoi fare il login.", "Successo"),
      error: () => this.toastr.error("Link scaduto o non valido.", "Errore")
    });
  }
}
