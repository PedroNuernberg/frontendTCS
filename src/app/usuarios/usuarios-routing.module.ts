import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './usuarios-list/usuarios.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioResolver } from './guards/usuario.resolver';

const routes: Routes = [
  { path: '', component: UsuariosComponent },
  { path: 'novo', component: UsuarioFormComponent, resolve: { usuario: UsuarioResolver} },
  { path: 'editar/:id', component: UsuarioFormComponent, resolve: { usuario: UsuarioResolver} }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
