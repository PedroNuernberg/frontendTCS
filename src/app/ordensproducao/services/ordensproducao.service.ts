import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Ordemproducao } from '../models/ordemproducao';

@Injectable({
  providedIn: 'root'
})
export class OrdensproducaoService {

  constructor(private httpClient: HttpClient) { }

  list(): Ordemproducao[] {
    return [
      {_id: '1', name: '001-1604', category: 'andamento '}
    ];
  }
}
