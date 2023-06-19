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

  loadById(id: string) {
    return this.httpClient.get<Terceiro>(`${this.API}/${id}`);
  }

  GetTerceiros():Observable<Terceiro[]> {
    return this.httpClient.get<Terceiro[]>(this.API)
  }

  save(record: Partial<Terceiro>) {
    if (record.idTerceiro) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Terceiro>) {
    return this.httpClient.post<Terceiro>(`${this.API}/`, record);
  }

  private update(record: Partial<Terceiro>) {
    return this.httpClient.put<Terceiro>(`${this.API}/${record.idTerceiro}`, record);
  }

  public inactivate(record: Partial<Terceiro>) {    
    record.enumStatus = "Inativo";
    return this.httpClient.put<Terceiro>(`${this.API}/${record.idTerceiro}`, record);
  }
}

