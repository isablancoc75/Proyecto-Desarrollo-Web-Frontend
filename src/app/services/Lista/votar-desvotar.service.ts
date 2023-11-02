import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VotarDesvotarService {
  private canciones: { id: number; nombre: string; puntuacion: number }[] = [
    { id: 1, nombre: 'Canción 1', puntuacion: 0 },
    { id: 2, nombre: 'Canción 2', puntuacion: 0 },
    // Agrega más canciones
  ];

  votarPorCancion(cancionId: number) {
    const cancion = this.canciones.find((c) => c.id === cancionId);
    if (cancion) {
      cancion.puntuacion++;
    }
  }

  desvotarPorCancion(cancionId: number) {
    const cancion = this.canciones.find((c) => c.id === cancionId);
    if (cancion && cancion.puntuacion > 0) {
      cancion.puntuacion--;
    }
  }

  obtenerPuntuacionCancion(cancionId: number) {
    const cancion = this.canciones.find((c) => c.id === cancionId);
    return cancion ? cancion.puntuacion : 0;
  }
}
