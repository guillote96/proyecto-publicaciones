import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Publicacion } from 'src/app/models/publicacion';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-verarticulo',
  templateUrl: './verarticulo.component.html',
  styleUrls: ['./verarticulo.component.css']
})
export class VerarticuloComponent implements OnInit {
  public id: String;
  public publicacion:Publicacion;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _publicacionService: PublicacionService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params["id"];
      this._publicacionService.getPublicacion(id).subscribe(response => {
        if (response.publicacion) {
          this.publicacion = response.publicacion;
          this.id=id;

        } else {
          this._router.navigate(['/articulos']);
          /*swal({
            title: "Error",
            text: "Ups! Se ha producido un error! =(",
            icon: "error",
           });*/
        }

      },
        error => {
          console.log(error);
         /* swal({
            title: "Error",
            text: "Ups! Se ha producido un error! =(",
            icon: "error",
           });*/

        }
      );
    });
  }


  eliminar(id){
    this._publicacionService.delete(id).subscribe(
      response=>{
        this._router.navigate(['articulos']);
 
      },
      error=>{
        console.log(error);
 
      }
 
    )
   }
}


