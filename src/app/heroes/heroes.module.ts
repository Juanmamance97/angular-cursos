import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  exports:[ //Componentes que queremos usar fuera de este modulo en otros
    ListadoComponent
  ],
  imports:[ //Agregar modulos o componentes de otros modulos
    CommonModule //Si aplicamos directivas ngFor, ngIf, ...
  ]
})
export class HeroesModule {}
