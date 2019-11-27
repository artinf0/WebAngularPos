import { Injectable } from '@angular/core';
import {BaseApi} from 'src/app/shared/base-api';
import {HttpClient} from '@angular/common/http';
import {medico} from '../model/medico';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MedicoService} from './medico.service';

@Injectable({
  providedIn: 'root'
})
export class MedicoResolve implements Resolve<medico> {
  constructor(private medicoService: MedicoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<medico> | medico {
    const id = route.paramMap.get('id');
    if (id) {
      return this.medicoService.consultar(id);
    }
    return new medico();

  }


}