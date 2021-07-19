import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Publicacion } from 'src/app/models/publicacion';
import {PublicacionService} from '../../services/publicacion.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public publicaciones : Publicacion[];
  public encabezado = "Listado de Articulos";
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _publicacionServices:PublicacionService
  ) { }

  ngOnInit(): void {
   this.obtenerPublicaciones();
  }

  obtenerPublicaciones(){
    this._publicacionServices.getPublicaciones().subscribe(
      response=>{
        this.publicaciones=response.publicaciones;
        console.log(response);
 
      },
      error=>{
        console.log(error);
 
      }
 
    )
  }
  eliminar(id){
    this._publicacionServices.delete(id).subscribe(
      response=>{
        this.obtenerPublicaciones();
 
      },
      error=>{
        console.log(error);
 
      }
 
    )
   }

 
}
