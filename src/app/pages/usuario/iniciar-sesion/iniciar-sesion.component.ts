import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  votanteEmail: string = '';
  votantePassword: string = '';

  onSubmit() {
    // Aquí puedes agregar la lógica de autenticación para administradores
    if (this.votanteEmail === 'correo@admin.com' && this.votantePassword === 'contraseña') {
      // Autenticación exitosa, puedes redirigir a la página de administrador
      // this.router.navigate(['/dashboard-admin']); // Ajusta la ruta según tu aplicación
    } else {
      // Autenticación fallida, muestra un mensaje de error
    }
  }

}
