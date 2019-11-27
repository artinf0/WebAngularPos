import { Component, OnInit } from '@angular/core';
import { medico } from '../model/medico';
import { MedicoService } from '../servico/medico.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
private medicos: medico[];
  constructor(private medicoService: MedicoService) { }

  ngOnInit() {
    this.medicoService.listar().subscribe(medicos => {
      console.log(medicos);
      this.medicos = medicos;
    });
  }
}
