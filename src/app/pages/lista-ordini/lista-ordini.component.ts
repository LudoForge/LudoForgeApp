import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common'; // <-- Importa DatePipe o CommonModule
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-lista-ordini',
  imports: [CommonModule],
  templateUrl: './lista-ordini.component.html',
  styleUrl: './lista-ordini.component.scss'
})
export class ListaOrdiniComponent implements OnInit {
  ordini: any[] = [];

  constructor(private http: HttpClient, private authService: AuthService ) {}

  ngOnInit() {
    //const currentUser = this.authService.getUser(); 
    console.log("order");
    const email = "edoardo.bertazzo01@gmail.com";

    this.http.get<any[]>(`http://localhost:8080/api/orders/my-orders?email=${email}`)
      .subscribe(data => this.ordini = data);
  }
}