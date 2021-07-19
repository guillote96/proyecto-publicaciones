import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Publicacion } from 'src/app/models/publicacion';
import {PublicacionService} from '../../services/publicacion.service'

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css'],
  providers:[PublicacionService]
})
export class ArticulosComponent implements OnInit {
  @Input() publicaciones : Publicacion[];
 

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _publicacionServices:PublicacionService
  ) { }

  ngOnInit(): void {
  
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


