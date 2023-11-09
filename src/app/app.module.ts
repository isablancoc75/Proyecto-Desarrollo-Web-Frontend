import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { CrearCuentaComponent } from './pages/usuario/crear-cuenta/crear-cuenta.component';
import { IniciarSesionComponent } from './pages/usuario/iniciar-sesion/iniciar-sesion.component';
import { VerListasComponent } from './pages/listas/ver-listas/ver-listas.component';
import { BuscarCancionComponent } from './pages/listas/buscar-cancion/buscar-cancion.component';
import { VotarDesvotarComponent } from './pages/listas/votar-desvotar/votar-desvotar.component';
import { CrearAdminComponent } from './pages/admin/crear-admin/crear-admin.component';
import { IniciarAdminComponent } from './pages/admin/iniciar-admin/iniciar-admin.component';
import { GenerosComponent } from './pages/admin/generos/generos.component';
import { CancionesComponent } from './pages/admin/canciones/canciones.component';
import { SeleccionUsuarioComponent } from './pages/tipoUsuario/seleccion-usuario/seleccion-usuario.component';
import { BienvenidaComponent } from './pages/home/bienvenida/bienvenida.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectoComponent,
    EquipoComponent,
    ContactenosComponent,
    CrearCuentaComponent,
    IniciarSesionComponent,
    VerListasComponent,
    BuscarCancionComponent,
    VotarDesvotarComponent,
    CrearAdminComponent,
    IniciarAdminComponent,
    GenerosComponent,
    CancionesComponent,
    SeleccionUsuarioComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
