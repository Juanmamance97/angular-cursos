import { Component } from '@angular/core';



@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent{
  nombre: string = 'Ironman';
  edad: number = 45;

  //get define una propiedaad que al ser llamada, sera procesada
  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    //Así podemos crear templates de un string directamente
    return `${this.nombre} - ${this.edad}`;
    //Es lo mismo que
    // return this.nombre + ' - ' + this.edad;
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';

  }

}
