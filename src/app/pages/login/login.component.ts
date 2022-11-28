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
    setInterval(()=>{
      this.error = ''
    },4500)
  }

  login() {
    const formData = new FormData();

    formData.append('user', this.usuario);
    formData.append('password', this.password);

    this.api.login(formData).subscribe(result => {
      const user = {
        id: result.usuario[0].id,
        usuario: result.usuario[0].usuario,
        nombre: result.usuario[0].nombre,
        fecha: result.usuario[0].fecha,
        rol: result.usuario[0].rol,
        token: result.token,
      }
      this.storage.store('usuario', user);
      document.getElementById('content')?.classList.toggle('login')
    }, error =>{
      this.error = 'usuario o contraseña incorrectos'
    });
  }

  click() {
    document.getElementById('content')?.classList.toggle('login')
  }


}
