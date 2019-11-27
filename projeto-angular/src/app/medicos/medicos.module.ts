import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from '../medicos/listar/listar.component';
import { MedicoRoutingModule } from './medico-routing.module';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatFormFieldModule  } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from '../medicos//editar/editar.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [ListarComponent, EditarComponent],
  imports: [
    CommonModule,
    MedicoRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule ,
    HttpClientModule
  ], 
  exports: [
    MedicoRoutingModule
  ]
})
export class MedicosModule { }
