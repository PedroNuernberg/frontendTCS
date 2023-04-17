import { OrdensproducaoService } from './../services/ordensproducao.service';
import { Component, OnInit } from '@angular/core';
import { Ordemproducao } from '../models/ordemproducao';

@Component({
  selector: 'app-ordensproducao',
  templateUrl: './ordensproducao.component.html',
  styleUrls: ['./ordensproducao.component.scss']
})
export class OrdensproducaoComponent implements OnInit {

  ordensproducao: Ordemproducao[] = [];
  displayedColumns = ['name','category'];

  //ordemProducaoService: OrdensproducaoService;

  constructor(private ordemProducaoService: OrdensproducaoService) {
    this.ordensproducao = this.ordemProducaoService.list();
  }

  ngOnInit(): void {
  }

}
