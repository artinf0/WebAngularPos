import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';


const routes: Routes = [
  {
    path: '', 
    component: ListarComponent
  }, {
    path: 'novo',
    component: EditarComponent

  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
