import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios.model';

@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.scss']
})
export class TablaUsuarioComponent implements OnInit {

  usuarios: Usuarios[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
