import { ActivatedRoute, Router } from '@angular/router';
import { Ordemproducao } from './../models/ordemproducao';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ordensproducao-list',
  templateUrl: './ordensproducao-list.component.html',
  styleUrls: ['./ordensproducao-list.component.scss']
})
export class OrdensproducaoListComponent {

  @Input() ordensproducao: Ordemproducao[] = [];

   readonly displayedColumns = ['name','category', 'actions'];

  constructor (private router: Router,
    private route: ActivatedRoute) {

    }

    onAdd() {
      this.router.navigate(['novo'], {relativeTo: this.route});

    }

}
