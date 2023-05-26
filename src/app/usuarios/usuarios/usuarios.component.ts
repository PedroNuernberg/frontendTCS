import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/Usuario';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {

  usuarios!: Usuario[];
  dataSource: any;
  displayedColumns = ['id','nomeUsuario', 'senhaUsuario', 'tipoUsuario', 'emailUsuario', 'enumStatus'];



  constructor(private usuariosService: UsuariosService) {
    this.usuariosService.GetUsuario().subscribe(res => {
      this.usuarios = res;
      this.dataSource = new MatTableDataSource<Usuario>(this.usuarios);

    });



  }

}
