import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioSistemaComponent } from './componentes/formulario/formulario-sistema.component';
import { TablaCaracteristicasComponent } from './componentes/tablas/tabla-caracteristicas/tabla-caracteristicas.component';
import { TablaUsuarioComponent } from './componentes/tablas/tabla-usuario/tabla-usuario.component';

const routes: Routes = [
  {path:'',redirectTo:'usuarios-sistemas',pathMatch:'full'},
  {path:'usuarios-sistemas', component:TablaUsuarioComponent},
  {path:'caracteristicas-sistemas', component:TablaCaracteristicasComponent},
  {path:'datos-sistema', component:FormularioSistemaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
