import { Component, OnInit } from '@angular/core';
import { Caracteristicas } from 'src/app/models/caracteristicas.model';
import { SessionStorageService } from 'ngx-webstorage';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-tabla-caracteristicas',
  templateUrl: './tabla-caracteristicas.component.html',
  styleUrls: ['./tabla-caracteristicas.component.scss']
})
export class TablaCaracteristicasComponent implements OnInit {

  filter: any
  caracteristicas: Caracteristicas[] = []

  constructor(private storage: SessionStorageService, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.get_datos()
    this.storage.clear('filter');
    this.filter = ''
    this.storage.observe('filter').subscribe(result=>{
      this.filter = result;
    })
  }

  get_datos() {
    this.api.get_caracteristicas().subscribe(result => {
      this.caracteristicas = result;
    })
  }

  navigate(item: any) {
    this.storage.store('datos', item);
    this.storage.store('edit', true);
    console.log('sdfghj', this.storage.retrieve('datos'));

    this.router.navigate(['datos-sistema']);
  }

}
