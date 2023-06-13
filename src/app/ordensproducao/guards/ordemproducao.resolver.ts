import { Terceiro } from './../../terceiros/models/Terceiro';
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
    return of({id: '', dataInicialOp: '', dataFinalOp: '', statusOrdemProducao: '', qtdePecasOp: 0, loteOp: '', obsOp: '', enumStatus: '',
      terceiro: {id: '', razaoSocial: '', cnpjTerceiro: '', enderecoTerceiro: '', cepTerceiro: '', bairroTerceiro: '', numeroTerceiro: '', enumStatus: '', telefoneTerceiro: '', contatoTerceiro: '',
      usuario: {idUsuario: '', nomeUsuario: '', senhaUsuario: '', tipoUsuario: 0, emailUsuario: '', enumStatus: ''}}} );
  }
}