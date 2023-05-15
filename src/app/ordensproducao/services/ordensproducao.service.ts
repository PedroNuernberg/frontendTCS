import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

import { Ordemproducao } from './../models/ordemproducao';

@Injectable({
  providedIn: 'root'
})
export class OrdensproducaoService {

  private readonly API = 'http://localhost:8080/api/ordemProducao/'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Ordemproducao[]>(this.API)
    .pipe(
      first(),
      //delay(5000),
    );
  }

  loadById(id: string) {
    return this.httpClient.get<Ordemproducao>(`${this.API}${id}`);
  }

  save(record: Partial<Ordemproducao>) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Ordemproducao>) {
    return this.httpClient.post<Ordemproducao>(this.API, record);
  }

  private update(record: Partial<Ordemproducao>) {
    return this.httpClient.put<Ordemproducao>(`${this.API}${record.id}`, record);
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}${id}`).pipe(first());
  }
}
  