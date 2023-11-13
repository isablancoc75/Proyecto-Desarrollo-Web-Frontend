import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { CrearCuentaComponent } from './pages/usuario/crear-cuenta/crear-cuenta.component';
import { VerListasComponent } from './pages/listas/ver-listas/ver-listas.component'; // Asegúrate de importar el componente adecuadamente
import { SeleccionUsuarioComponent } from './pages/tipoUsuario/seleccion-usuario/seleccion-usuario.component';
import { IniciarAdminComponent } from './pages/admin/iniciar-admin/iniciar-admin.component';
import { IniciarSesionComponent } from './pages/usuario/iniciar-sesion/iniciar-sesion.component';
import { CrearAdminComponent } from './pages/admin/crear-admin/crear-admin.component';
import { BienvenidaComponent } from './pages/home/bienvenida/bienvenida.component';
import { WelcomeComponent } from './pages/homeAdim/welcome/welcome.component';
import { GenerosComponent } from './pages/admin/generos/generos.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {path: 'proyecto', component: ProyectoComponent},
  {path: 'equipo', component: EquipoComponent},
  {path: 'contactenos', component: ContactenosComponent},
  {path: 'seleccion-usuario', component: SeleccionUsuarioComponent},
  {path: 'iniciar-admin', component: IniciarAdminComponent},
  {path: "iniciar-sesion", component: IniciarSesionComponent},
  {path: "bienvenida", component: BienvenidaComponent},
  {path: "welcome", component:WelcomeComponent},
  {path: "crear-admin", component: CrearAdminComponent},
  {path: 'crear-cuenta', component: CrearCuentaComponent },
  {path: 'ver-listas', component: VerListasComponent },
  {path: 'crud-generos', component: GenerosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
