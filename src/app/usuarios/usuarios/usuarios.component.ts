import { Component, ViewChild } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/Usuario';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {

  usuarios!: Usuario[];
  dataSource: any;
  displayedColumns = ['id','nomeUsuario', 'senhaUsuario', 'tipoUsuario', 'emailUsuario', 'enumStatus'];
  @ViewChild(MatPaginator) paginator !:MatPaginator;



  constructor(private usuariosService: UsuariosService) {
    this.usuariosService.GetUsuario().subscribe(res => {
      this.usuarios = res;
      this.dataSource = new MatTableDataSource<Usuario>(this.usuarios);
      this.dataSource.paginator = this.paginator;

    });
  }
}
