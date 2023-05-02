import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { OrdensproducaoService } from './../services/ordensproducao.service';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-ordensproducao-form',
  templateUrl: './ordensproducao-form.component.html',
  styleUrls: ['./ordensproducao-form.component.scss']
})
export class OrdensproducaoFormComponent implements OnInit {


  form: FormGroup;



  constructor(private formBuilder: FormBuilder,
    private service: OrdensproducaoService,
    private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      loteOp: [null],
      statusOrdemProducao: [null]
    });

  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.service.save(this.form.value)
    .subscribe(result => console.log(result), error => this.onError());
  }

  onCancel() {

  }

  private onError() {
    this.snackBar.open('Erro ao incluir Ordem de Produção!', '', {duration: 3000 });

  }
}
