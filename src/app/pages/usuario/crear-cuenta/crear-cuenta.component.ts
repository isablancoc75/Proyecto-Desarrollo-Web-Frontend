import { Component } from '@angular/core';
import { CrearCuentaService } from 'src/app/services/Usuario/crear-cuenta.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {
  
    constructor(private crearCuentaService: CrearCuentaService) { }
  
    registrar() {
      // Utiliza el servicio "crear-cuenta" para registrar un usuario
      // Actualiza las referencias al servicio en todo el componente
    }
}
