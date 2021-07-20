import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Observable } from 'rxjs';
import {Publicacion} from '../../models/publicacion';
import {PublicacionService} from '../../services/publicacion.service';
import {Global} from '../../services/global';
import swal from 'sweetalert';


@Component({
  selector: 'app-creararticulo',
  templateUrl: './creararticulo.component.html',
  styleUrls: ['./creararticulo.component.css']
})
export class CreararticuloComponent implements OnInit {
  public publicacion:Publicacion;
  public encabezado = 'Crear Articulo';
  public edit:Boolean;
  public boton="Crear Articulo";

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _publicacionService:PublicacionService
  ) {
    this.publicacion = new Publicacion(null,null,null,null,null,null);
    this.edit=false;
   }

  ngOnInit(): void {
  }

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

  onSubmit(){
    console.log(this.publicacion);
    this._publicacionService.save(this.publicacion).subscribe(
     response=>{
       if(response.status = 'success'){
         this.publicacion=response.publicacion;
         swal({
          title: "Guardar Articulo",
          text: "Se ha guardado el articulo Correctamente",
          icon: "success",
         });
         this._router.navigate(['/articulos']);
       }else{
        swal({
          title: "Error",
          text: "Ups! Se ha producido un error! =(",
          icon: "error",
         });
       }

     },
     error=>{
       console.log(error);
       swal({
        title: "Error",
        text: "Ups! Se ha producido un error! =(",
        icon: "error",
       });

     }
    );
    

  }

  imageUpload(data){
    let nombre = data.body["image"];
    this.publicacion.imagen=nombre;

  }

}
