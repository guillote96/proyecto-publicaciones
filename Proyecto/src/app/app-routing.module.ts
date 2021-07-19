import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { CreararticuloComponent } from './components/creararticulo/creararticulo.component';
import { EditararticuloComponent } from './components/editararticulo/editararticulo.component';
import { VerarticuloComponent } from './components/verarticulo/verarticulo.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'articulos', component: HomeComponent},
  { path: 'creararticulo', component: CreararticuloComponent},
  { path: 'editararticulo/:id', component: EditararticuloComponent},
  { path: 'verarticulo/:id', component: VerarticuloComponent},
  { path: 'buscar/:path', component: BuscarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//[routerLink]="['/home']"