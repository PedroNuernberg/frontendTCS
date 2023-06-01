import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Ordemproducao } from './../../models/ordemproducao';

@Component({
  selector: 'app-ordensproducao-list',
  templateUrl: './ordensproducao-list.component.html',
  styleUrls: ['./ordensproducao-list.component.scss']
})
export class OrdensproducaoListComponent {

  @Input() ordensproducao: Ordemproducao[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

   readonly displayedColumns = ['category', 'loteOp', 'qtdePecasOp', 'actions'];

  constructor () {

    }

    onAdd() {
      this.add.emit(true);
    }

    onEdit(ordemproducao: Ordemproducao) {
      this.edit.emit(ordemproducao);
    }

    onDelete(ordemproducao: Ordemproducao) {
      this.remove.emit(ordemproducao);
    }
}
