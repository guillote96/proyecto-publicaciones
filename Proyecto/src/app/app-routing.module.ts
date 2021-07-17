import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { CreararticuloComponent } from './components/creararticulo/creararticulo.component';
import { EditararticuloComponent } from './components/editararticulo/editararticulo.component';
import { VerarticuloComponent } from './components/verarticulo/verarticulo.component';

const routes: Routes = [
  { path: '', component: ArticulosComponent},
  { path: 'articulos', component: ArticulosComponent},
  { path: 'creararticulo', component: CreararticuloComponent},
  { path: 'editararticulo', component: EditararticuloComponent},
  { path: 'verarticulo', component: VerarticuloComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//[routerLink]="['/home']"