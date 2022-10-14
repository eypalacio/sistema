import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-formulario-sistema',
  templateUrl: './formulario-sistema.component.html',
  styleUrls: ['./formulario-sistema.component.scss']
})
export class FormularioSistemaComponent implements OnInit, OnDestroy {

  datos: any = {
    sistema: '',
    siglas: '',
    desarrollador: '',
    lenguaje_programaion: '',
    tipo: '',
    url: '',
    servidor_aplicacion: '',
    base_datos: '',
    servidor_base_datos: '',
    administrador: '',
    descripcion: '',
    areas_usuarias: '',
    tipo_db: '',
    soporte: '',
  }
  message: string = '';


  constructor(private storage: SessionStorageService, private api: ApiService, private router: Router) { }
  ngOnDestroy(): void {
    this.storage.clear('datos')
    this.storage.clear('edit')
  }

  ngOnInit(): void {
    this.datos = this.storage.retrieve('datos') ? this.storage.retrieve('datos') : {};
  }

  aceptar() {
    // formData.append('var backend q recoge el dato(post-put)', )
    const formData = new FormData()
    console.log(this.datos);
    
    formData.append('sistema', this.datos.sistema);
    formData.append('siglas', this.datos.siglas);
    formData.append('descripcion', this.datos.descripcion);
    formData.append('desarrollador', this.datos.desarrollador);
    formData.append('lenguaje_programacion', this.datos.lenguaje_programacion);
    formData.append('tipo', this.datos.tipo);
    formData.append('url', this.datos.url);
    formData.append('servidor_aplicacion', this.datos.servidor_aplicacion);
    formData.append('base_datos', this.datos.base_datos);
    formData.append('tipo_db', this.datos.tipo_db);
    formData.append('servidor_base_datos', this.datos.servidor_base_datos);
    formData.append('administrador', this.datos.administrador);
    formData.append('areas_usuarias', this.datos.areas_usuarias);
    formData.append('soporte', this.datos.soporte);
    console.log('ddddddddddd',this.storage.retrieve('edit'));
    

    if (this.storage.retrieve('edit')!=null) {
      this.api.update_caracteristicas(this.datos.id, formData).subscribe(result => {
        this.router.navigate(['caracteristicas-sistemas'])
      }, error => {
        this.message = 'Ha ocurrido un error al actualizar los datos del sistema'
      })
    } else {
      this.api.add_caracteristicas(formData).subscribe(result => {
        this.router.navigate(['caracteristicas-sistemas']);
      }, error => {
        this.message = 'Ha ocurrido un error al annadir los datos del sistema'
      })
    }
  }

}
