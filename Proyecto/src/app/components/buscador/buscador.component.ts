import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Publicacion } from 'src/app/models/publicacion';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public path:String;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _publicacionService: PublicacionService
  ) { }

  ngOnInit(): void {
    
  }

  busqueda(){
    this._router.navigate(['/buscar',this.path]);
  }




}
