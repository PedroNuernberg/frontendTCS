import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

import { Ordemproducao } from './../models/ordemproducao';
import { Filtro } from '../models/filtro';

@Injectable({
  providedIn: 'root'
})
export class OrdensproducaoService {

  private readonly API = 'http://localhost:8080/api/ordemProducao'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Ordemproducao[]>(this.API)
    .pipe(
      first(),
      //delay(5000),
    );
  }

  filter(filter: Partial<Filtro>) {

    let params = new HttpParams();

    if (filter.status)
    params = params.set('status', filter.status);

    if (filter.lote)
    params = params.set('lote', filter.lote);

    if (filter.opPorIdOp)
    params = params.set('opPorIdOp', filter.opPorIdOp);

    if (filter.opPorTerceiro)
    params = params.set('opPorTerceiro', filter.opPorTerceiro);

    if (filter.dataInicialInicio)
    params = params.set('dataInicialInicio', filter.dataInicialInicio);

    if (filter.dataFinalInicio)
    params = params.set('dataFinalInicio', filter.dataFinalInicio);

    if (filter.dataInicialFinal)
    params = params.set('dataInicialFinal', filter.dataInicialFinal);

    if (filter.dataFinalFinal)
    params = params.set('dataFinalFinal', filter.dataFinalFinal);

    return this.httpClient.get<Ordemproducao[]>(`${this.API}/filtro`, { params })
    .pipe(
      first(),
      //delay(5000),
    );
  }

  loadById(id: string) {
    return this.httpClient.get<Ordemproducao>(`${this.API}/${id}`);
  }

  save(record: Partial<Ordemproducao>) {
    if (record.id) {
      return this.update(record) ;
    }
    return this.create(record);
  }

  private create(record: Partial<Ordemproducao>) {
    return this.httpClient.post<Ordemproducao>(`${this.API}`, record);
  }

  private update(record: Partial<Ordemproducao>) {
    return this.httpClient.put<Ordemproducao>(`${this.API}/${record.id}`, record);
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
 
  public inactivate(record: Partial<Ordemproducao>) {
    record.enumStatus = "Inativo";
    return this.httpClient.put<Ordemproducao>(`${this.API}/${record.id}`, record);
  }
}
  