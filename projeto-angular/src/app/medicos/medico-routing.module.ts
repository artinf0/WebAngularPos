import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { MedicoResolve } from './servico/medico.resolve';


const routes: Routes = [
  {
    component: ListarComponent,
    path: '',
  },
  {
    component: EditarComponent,
    path: 'novo',
    resolve: {
      medico: MedicoResolve
    }
  },
  {
    component: EditarComponent,
    path: 'editar/:id',
    resolve: {
      medico: MedicoResolve
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
