import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListarComponent } from '../listar/listar.component';
import { observable, Observable } from 'rxjs';
import { medico } from '../model/medico';
import { map } from 'rxjs/operators'
import { BaseApi } from 'src/app/shared/base-api';

@Injectable({
  providedIn: 'root'
})
export class MedicoService extends BaseApi<medico> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'medicos')
  }
}