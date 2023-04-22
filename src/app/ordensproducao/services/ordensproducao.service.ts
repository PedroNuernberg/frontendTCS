import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Ordemproducao } from '../models/ordemproducao';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdensproducaoService {

  private readonly API = '/assets/ordensproducao.json'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Ordemproducao[]>(this.API)
    .pipe(
      first(),
      //delay(5000),
    );
  }
}
