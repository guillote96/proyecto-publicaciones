import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Publicacion } from 'src/app/models/publicacion';
import { PublicacionService } from 'src/app/services/publicacion.service';
import {Global} from '../../services/global';

@Component({
  selector: 'app-editararticulo',
  templateUrl: './../creararticulo/creararticulo.component.html',
  styleUrls: ['./editararticulo.component.css']
})
export class EditararticuloComponent implements OnInit {
  public id: String;
  public publicacion:Publicacion;
  public edit:Boolean;
  public encabezado:String;
  public boton:String;

  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .jpeg, .gif",
    maxSize: "50",
    uploadAPI:  {
      url:Global.url+'upload/',
      method:"POST",
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Seleccionar Imagen',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
};

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _publicacionService: PublicacionService) { 
      this.edit=true;
      this.encabezado= 'Editar Articulo';
      this.boton="Editar Articulo";
    }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params["id"];
      this._publicacionService.getPublicacion(id).subscribe(response => {
        if (response.publicacion) {
          this.publicacion = response.publicacion;
          this.id=id;

        } else {
          this._router.navigate(['verarticulo/:id',this.publicacion._id]);
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
  onSubmit(){
    this._publicacionService.update(this.id,this.publicacion).subscribe(
     response=>{
       if(response.status = 'success'){
         this.publicacion=response.publicacion;
         this._router.navigate(['verarticulo/',this.id]);
       }

     },
     error=>{
       console.log(error);

     }
    );
    

  }
  imageUpload(data){
    let nombre = data.body["image"];
    this.publicacion.imagen=nombre;

  }

}
