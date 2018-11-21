import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 	/* selecto para llamarlo en la vista ej:  <usuarios></usuarios> */
  templateUrl: './login.component.html' /* , la vista fisica del template */
  /* styleUrls: ['./app.component.css']  el estilo del template */
})
export class LoginComponent {
  title = 'makoto';
  perrito = 'adminpro';
}
