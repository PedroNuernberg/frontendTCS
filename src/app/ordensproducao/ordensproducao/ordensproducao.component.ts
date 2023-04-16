import { Component, OnInit } from '@angular/core';
import { Ordemproducao } from '../models/ordemproducao';

@Component({
  selector: 'app-ordensproducao',
  templateUrl: './ordensproducao.component.html',
  styleUrls: ['./ordensproducao.component.scss']
})
export class OrdensproducaoComponent implements OnInit {

  ordensproducao: Ordemproducao[] = [
    {_id: '1', name: '001-1604', category: 'andamento '}
  ];
  displayedColumns = ['name','category'];

  constructor() {
    //this.ordensproducao = [];
  }

  ngOnInit(): void {
  }

}
