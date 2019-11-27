import { Component, OnInit } from '@angular/core';
import { medico } from '../model/medico';
import { MedicoService } from '../servico/medico.service';
import { ActivatedRoute,Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  medico : medico;
  title: string;

  constructor(route: ActivatedRoute,
              private router: Router,
              private medicoService: MedicoService) {
    this.medico = route.snapshot.data.medico;
    this.title = this.medico.id ? 'Atualizar Médico' : 'Cadastrar Médico';
  }

  ngOnInit() : void{

  }

  voltar(): void {
    this.router.navigate(['..']);
  }

  enviar(form: NgForm): void {
    if (form.valid) {
      this.medicoService.salvar(this.medico)
        .subscribe(() => this.voltar());
    }
  }
}
