import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Ordemproducao } from '../models/ordemproducao';
import { OrdensproducaoService } from '../services/ordensproducao.service';

@Injectable({
  providedIn: 'root'
})
export class OrdemproducaoResolver implements Resolve<Ordemproducao> {

  constructor(private service: OrdensproducaoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ordemproducao> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({id: '', dataInicialOp: '', statusOrdemProducao: '', qtdePecasOp: '', loteOp: ''});
  }
}
