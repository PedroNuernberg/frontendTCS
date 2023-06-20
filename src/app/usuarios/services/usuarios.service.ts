import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly API = 'http://localhost:8080/api/usuario/'

  constructor(private httpClient: HttpClient) { }


  loadById(id: string) {
    return this.httpClient.get<Usuario>(`${this.API}${id}`);

  }


  GetUsuario():Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.API)

  }

  save(record: Partial<Usuario>) {
    if (record.idUsuario) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Usuario>) {
    return this.httpClient.post<Usuario>(this.API, record);
  }

  private update(record: Partial<Usuario>) {
    return this.httpClient.put<Usuario>(`${this.API}${record.idUsuario}`, record);
  }

  public inactivate(record: Partial<Usuario>) {
    record.enumStatus = "Inativo";
    return this.httpClient.put<Usuario>(`${this.API}${record.idUsuario}`, record);
  }
}
