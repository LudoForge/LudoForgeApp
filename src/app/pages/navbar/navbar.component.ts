import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Serve per ngClass se lo usi
import { RouterModule } from '@angular/router'; // Per i link
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  authService = inject(AuthService); // Iniettiamo il servizio
  
  // Stato per aprire/chiudere la tendina
  isDropdownOpen = false;

  isLoggedIn = true; 
  
  // Gestisce l'apertura della tendina
  isOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    this.authService.logout();
    this.isDropdownOpen = false;
    console.log("Utente disconnesso");
    // Qui potresti reindirizzare alla home con router.navigate(['/'])
  }
}