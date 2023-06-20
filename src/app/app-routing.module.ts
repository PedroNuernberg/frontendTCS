import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/auth/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'ordensProducao',
    loadChildren: () => import('./ordensproducao/ordensproducao.module').then(m => m.OrdensproducaoModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'terceiros',
    loadChildren: () => import('./terceiros/terceiros.module').then(m => m.TerceirosModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
