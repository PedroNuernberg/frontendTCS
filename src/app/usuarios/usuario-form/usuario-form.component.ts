import { Component } from '@angular/core';
import { NonNullableFormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})

export class UsuarioFormComponent{

  form: FormGroup;


  // form = this.formBuilder.group({
  //   id: [''],
  //   nomeUsuario: [''],
  //   senhaUsuario: [''],
  //   tipoUsuario: [''],
  //   emailUsuario: [''],
  //   enumStatus: ['']
  // });

  constructor(public formBuilder: NonNullableFormBuilder) {
    this.form = this.formBuilder.group({
      // id: [''],
      nomeUsuario: [null],
      senhaUsuario: [null],
      // tipoUsuario: [''],
      // emailUsuario: [''],
      // enumStatus: ['']
    });

  }

  // ngOnInit(): void {
  //   const usuario: Usuario = this.route.snapshot.data['usuario'];
  //   this.form.setValue({
  //     id: usuario.id,
  //     nomeUsuario: usuario.nomeUsuario,
  //     senhaUsuario: usuario.senhaUsuario,
  //     tipoUsuario: usuario.tipoUsuario,
  //     emailUsuario: usuario.emailUsuario,
  //     enumStatus: usuario.enumStatus
  //   })
  // }

  // onSubmit() {
  //   this.service.save(this.form.value)
  //   .subscribe(result => this.onSuccess(), error => this.onError());
  // }

  // onCancel() {
  //   this.location.back();

  // }

  // private onSuccess() {
  //   this.snackBar.open('Ordem de produção incluída!', '', {duration: 3000 });
  //   this.onCancel();
  // }

  // private onError() {
  //   this.snackBar.open('Erro ao incluir Ordem de Produção!', '', {duration: 3000 });

  // }

  // getErrorMessage(fieldName: string) {
  //   const field = this.form.get(fieldName);

  //   if(field?.hasError('required')) {
  //     return 'Campo obrigatório'
  //   }

  //   // if(field?.hasError('minlength')) {
  //   //   const requiredLength: number = field.errors ? field.errors['minlength']['requiredLength'] : 5;
  //   //   return `Tamanho mínimo precisa ser de ${requiredLength} caracteres.`;
  //   // }

  //   if(field?.hasError('maxlength')) {
  //     const requiredLength: number = field.errors ? field.errors['maxlength']['requiredLength'] : 20;
  //     return `Tamanho máximo de ${requiredLength} caracteres excedido.`;
  //   }

  //   return 'Campo Inválido';
  // }

}
