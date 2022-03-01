import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**
 * TAREA:
 * Crear un módulo llamador ContadorModule
 * declaraciones y exportaciones
 */

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
