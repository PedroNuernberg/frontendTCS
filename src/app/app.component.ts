import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fronendTCS';

  nomeUsuario: string | null = localStorage.getItem('user_nome');

  mostrarMenu: boolean = false;

  // constructor(private login: LoginService) {

  // }

  //  ngOnInit() {
  //    this.login.mostrarMenuEmitter.subscribe(
  //      mostrar => this.mostrarMenu = mostrar
  //    );

  //  }
}
