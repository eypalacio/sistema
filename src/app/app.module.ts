import localEs from '@angular/common/locales/es';
registerLocaleData(localEs, 'es');
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { BusquedasRecientesComponent } from './componentes/busquedas-recientes/busquedas-recientes.component';
import { CalendarComponent } from './componentes/calendar/calendar.component';
import { FormularioSistemaComponent } from './componentes/formulario/formulario-sistema.component';
import { TablaCaracteristicasComponent } from './componentes/tablas/tabla-caracteristicas/tabla-caracteristicas.component';
import { TablaUsuarioComponent } from './componentes/tablas/tabla-usuario/tabla-usuario.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { FilterPipe } from './componentes/pipes/filter.pipe';
import { FilterUserPipe } from './pipes/filter-user.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarComponent,
    BusquedaComponent,
    BusquedasRecientesComponent,
    TablaUsuarioComponent,
    TablaCaracteristicasComponent,
    FormularioSistemaComponent,
    DashboardComponent,
    FilterPipe,
    FilterUserPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
