import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { CreararticuloComponent } from './components/creararticulo/creararticulo.component';
import { EditararticuloComponent } from './components/editararticulo/editararticulo.component';
import { VerarticuloComponent } from './components/verarticulo/verarticulo.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { BuscarComponent } from './components/buscar/buscar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { BarranavegadoraComponent } from './components/barranavegadora/barranavegadora.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    CreararticuloComponent,
    EditararticuloComponent,
    VerarticuloComponent,
    BuscarComponent,
    BuscadorComponent,
    BarranavegadoraComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
