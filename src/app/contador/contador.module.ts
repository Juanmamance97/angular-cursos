import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";

@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports:[ //Componentes que queremos usar fuera de este modulo en otros
    ContadorComponent
  ]
})
export class ContadorModule {}
