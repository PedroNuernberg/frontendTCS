import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Usuario } from '../models/Usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {

  usuarios!: Usuario[];
  dataSource: any;
  displayedColumns = ['nomeUsuario', 'emailUsuario', 'enumStatus', 'actions'];
  @ViewChild(MatPaginator) paginator !:MatPaginator;



  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) {
    this.usuariosService.GetUsuario().subscribe(res => {
      this.usuarios = res;
      this.dataSource = new MatTableDataSource<Usuario>(this.usuarios);
      this.dataSource.paginator = this.paginator;

    });
  }

  refresh() {
    // this.usuarios = this.usuariosService.GetUsuario()
    // .pipe(
    //   catchError(error => {
    //     this.onError('Erro ao carregar ordens de Produção!')
    //     return of([])
    //   })
    // );
  }

  onAdd() {
    this.router.navigate(['novo'], {relativeTo: this.route});

  }

  onEdit(usuario: Usuario) {
    this.router.navigate(['editar', usuario.idUsuario], {relativeTo: this.route});
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent,{
      data: errorMsg
    });
  }

  onDelete(usuario: Usuario) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse usuário?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.usuariosService.remove(usuario.idUsuario).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Usuário removido com sucesso!', 'X', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
           });
          },
          () => this.onError('Erro ao tentar remover Usuário.')
        );
      }
    });
  }
}
