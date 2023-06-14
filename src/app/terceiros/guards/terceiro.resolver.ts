import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Terceiro } from '../models/Terceiro';
import { TerceirosService } from '../services/terceiros.service';

@Injectable({
  providedIn: 'root'
})
export class TerceiroResolver implements Resolve<Terceiro> {

  constructor(private service: TerceirosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Terceiro> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({id: '',  razaoSocial: '', cnpjTerceiro: '', enderecoTerceiro: '', cepTerceiro: '', bairroTerceiro: '', numeroTerceiro: '', enumStatus: '', telefoneTerceiro: '', contatoTerceiro: '', usuario: {idUsuario: '', nomeUsuario: '', senhaUsuario: '', tipoUsuario: 0, emailUsuario: '', enumStatus: ''} });
  }
}
