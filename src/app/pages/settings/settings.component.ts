import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './settings.component.html'
})
export class SettingsComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  message = '';
  isError = false;

  passwordForm = this.fb.group({
    oldPassword: ['', [Validators.required]],
    newPassword: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]
  }, { 
    validators: (group) => group.get('newPassword')?.value === group.get('confirmPassword')?.value ? null : { mismatch: true }
  });

  onSubmit() {
    if (this.passwordForm.valid) {
      const data = {
        oldPassword: this.passwordForm.value.oldPassword,
        newPassword: this.passwordForm.value.newPassword
      };

      this.http.put('http://localhost:8080/api/settings/change-password', data, { responseType: 'text' })
        .subscribe({
          next: (res) => {
            this.message = "Password aggiornata!";
            this.isError = false;
            this.passwordForm.reset();
          },
          error: (err) => {
            this.message = err.error || "Errore durante l'aggiornamento";
            this.isError = true;
          }
        });
    }
  }
}