import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

import { Ordemproducao } from '../models/ordemproducao';

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

  save(record: Ordemproducao) {
    return this.httpClient.post<Ordemproducao>(this.API, record);
  }
}
