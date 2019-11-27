import { Component, OnInit } from '@angular/core';
import { medico } from '../model/medico';
import { MedicoService } from '../servico/medico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  medico : medico;

  constructor(private medicoService:MedicoService, private router:Router) { }

  ngOnInit() : void{

  }
  

}
