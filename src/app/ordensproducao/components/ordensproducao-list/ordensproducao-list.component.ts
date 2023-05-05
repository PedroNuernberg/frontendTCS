import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Ordemproducao } from '../../models/ordemproducao';

@Component({
  selector: 'app-ordensproducao-list',
  templateUrl: './ordensproducao-list.component.html',
  styleUrls: ['./ordensproducao-list.component.scss']
})
export class OrdensproducaoListComponent {

  @Input() ordensproducao: Ordemproducao[] = [];
  @Output() add = new EventEmitter(false);

   readonly displayedColumns = ['name','category', 'actions'];

  constructor () {

    }

    onAdd() {
      this.add.emit(true);
    }

}
