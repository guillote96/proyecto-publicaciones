import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { CreararticuloComponent } from './components/creararticulo/creararticulo.component';
import { EditararticuloComponent } from './components/editararticulo/editararticulo.component';
import { VerarticuloComponent } from './components/verarticulo/verarticulo.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    CreararticuloComponent,
    EditararticuloComponent,
    VerarticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
