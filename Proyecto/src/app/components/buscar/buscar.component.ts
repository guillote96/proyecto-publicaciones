import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Publicacion } from 'src/app/models/publicacion';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  public publicaciones:Publicacion[];
  constructor(   private _router: Router,
    private _route: ActivatedRoute,
    private _publicacionService: PublicacionService) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let path = params["path"];
      this._publicacionService.search(path).subscribe(
            response => {
              if(response.publicaciones){
                this.publicaciones=response.publicaciones;
              }
      
    
            },
            error => {
              console.log(error);
          
            }
      );
    });
  }

}
