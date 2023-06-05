import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Terceiro } from '../models/Terceiro';

@Injectable({
  providedIn: 'root'
})
export class TerceirosService {

  private readonly API = 'http://localhost:8080/api/terceiro'

  constructor(private httpClient: HttpClient) { }

  GetTerceiros():Observable<Terceiro[]> {
    return this.httpClient.get<Terceiro[]>(this.API)

  }
}
