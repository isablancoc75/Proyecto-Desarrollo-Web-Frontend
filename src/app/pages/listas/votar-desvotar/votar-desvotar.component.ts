import { Component, Input } from '@angular/core';
import { VotarDesvotarService } from 'src/app/services/Lista/votar-desvotar.service';

@Component({
  selector: 'app-votar-desvotar',
  templateUrl: './votar-desvotar.component.html',
  styleUrls: ['./votar-desvotar.component.css']
})
export class VotarDesvotarComponent {
  cancionId: number = 0; // Inicialización con un valor por defecto
  nombreCancion: string = '';

  constructor(private votarDesvotarService: VotarDesvotarService) { }

  votarPorCancion() {
    this.votarDesvotarService.votarPorCancion(this.cancionId);
  }

  desvotarPorCancion() {
    this.votarDesvotarService.desvotarPorCancion(this.cancionId);
  }

  obtenerPuntuacionCancion() {
    return this.votarDesvotarService.obtenerPuntuacionCancion(this.cancionId);
  }
}

