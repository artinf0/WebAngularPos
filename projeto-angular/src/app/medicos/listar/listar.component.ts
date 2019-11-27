import { Component, OnInit } from '@angular/core';
import {MedicoService} from '../servico/medico.service';
import {Router} from '@angular/router';
import {medico} from '../model/medico';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  public medicos: medico[];
  colunas: string[] = ['nome', 'email', 'crm', 'acoes'];

  constructor(private medicoService: MedicoService,
              private router: Router) { }

  ngOnInit() {
    this.atualizar();
  }

  atualizar(): void {
    this.medicoService.listar().subscribe(medicos => {
      this.medicos = medicos;
    });
  }

  editar({ id }: medico): void {
    this.router.navigate(['editar', id]);
  }

  remover({ id }: medico): void {
    this.medicoService.remover(id).subscribe(() => this.atualizar());
  }
}