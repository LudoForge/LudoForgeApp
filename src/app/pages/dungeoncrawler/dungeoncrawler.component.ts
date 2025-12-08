import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dungeoncrawler',
  imports: [RouterModule],
  templateUrl: './dungeoncrawler.component.html',
  styleUrl: './dungeoncrawler.component.scss'
})
export class DungeoncrawlerComponent {

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}
