import { Pipe, PipeTransform, OnChanges } from '@angular/core';

@Pipe({
  name: 'listaNumeroPar'
})
export class ListaNumeroParPipe implements PipeTransform {

  transform(value: number): any {

    console.log(value);
    if(value) 
    return value % 2 === 0 ? true : false;
  }
}
