import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { Usuarios } from 'src/app/models/usuarios.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.scss']
})
export class TablaUsuarioComponent implements OnInit {

  filter: any;
  usuarios: Usuarios[] = [];
  cantidad: number = 0;

  constructor(private api: ApiService, private storage: SessionStorageService) { }

  ngOnInit(): void {
    this.get_datos();

    setInterval(()=>{
      this.get_datos();
    },900000);

    this.storage.clear('filter');
    this.filter = '';
    this.storage.observe('filter').subscribe(result=>{
      this.filter = result;
    });
  }

  get_datos() {
    this.api.get_usuarios_datos().subscribe(result => {
      this.usuarios = result;
      this.cantidad = result.length
    })
  }

}
