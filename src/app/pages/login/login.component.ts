import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: string = '';
  password: string = '';
  error: string = '';

  constructor(private api: ApiService, private storage: SessionStorageService) { }

  ngOnInit(): void {

  }

  login() {
    const formData = new FormData();
    formData.append('usuario', this.usuario);
    formData.append('password', this.password);

    this.api.login(formData).subscribe(result => {
      const usuario = {
        id: result.usuario.id,
        usuario: result.usuario.usuario,
        nombre: result.usuario.nombre,
        fecha: result.usuario.fecha,
        rol: result.usuario.rol,
        token: result.token,        
      }
      console.log(usuario);
      
      this.storage.store('usuario', usuario);
      document.getElementById('content')?.classList.toggle('login')
    }, error =>{
      this.error = 'usuario o contraseña incorrectos'
      setTimeout(() => {
        this.error = '';
      }, 45);
    });
  }

}
