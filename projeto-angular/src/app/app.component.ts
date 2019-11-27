import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private router: Router) {}

 navegarParaListar():void{
   this.router.navigate(['medicos']);
 }

  title = 'projeto-angular';
}
