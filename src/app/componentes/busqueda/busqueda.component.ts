import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios.model';
import { SessionStorageService } from 'ngx-webstorage';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  inputValue: any = '';
  resultado: Usuarios[] = []
  activo: boolean = false;
  url: string = '';
  add: boolean = false;

  constructor(private router: Router, private storage: SessionStorageService, private api: ApiService) { }

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        console.log(e);
        
        console.log(e.url);
        // console.log('btn-'+e.url.split('-')[0].slice(1));
        this.activo = e.url === '/' || e.url == '/caracteristicas-sistemas' || e.url == '/usuarios-sistemas'
        console.log(this.activo);
        this.add = e.url == '/caracteristicas-sistemas'
        this.url = e.url;
        // if (this.activo) this.navegar({ id: 'btn-' + e.url.split('-')[0].slice(1) });
      }
    })
  }

  search() {
    console.log('trrrhuh');
  }

  navegar(event: any) {
    console.log(event.id);

    document.querySelectorAll('.active').forEach(e => {
      e.classList.remove('active');
    })
    document.getElementById(event.id)?.classList.add('active');
    this.router.navigate([event.id == 'btn-usuarios' ? 'usuarios-sistemas' : 'caracteristicas-sistemas'])
  }

  filter(){
    this.storage.store('filter',this.inputValue)
  }

  logout(){
    // const formData = new FormData().append('id', )
  }


}
