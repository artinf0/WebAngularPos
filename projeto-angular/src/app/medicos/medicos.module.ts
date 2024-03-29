import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from '../medicos/listar/listar.component';
import { MedicoRoutingModule } from './medico-routing.module';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatTableModule, MatInputModule, MatCardModule, MatTooltipModule  } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from '../medicos//editar/editar.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MudaCorDirective } from '../shared/muda-cor.directive';
import { ListaNumeroParPipe } from '../shared/lista-numero-par.pipe';

@NgModule({
  declarations: [ListarComponent, EditarComponent,MudaCorDirective,ListaNumeroParPipe],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule
  ], 
  exports: [
    MedicoRoutingModule
  ]
})
export class MedicosModule { }
