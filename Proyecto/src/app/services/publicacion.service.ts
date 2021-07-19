import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Publicacion } from '../models/publicacion';
import {Global} from './global';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  public url: String;

  constructor(private _http:HttpClient) { 
    this.url=Global.url;
  }

  pruebas(){
    return 'soy el servicio de articulos';
  }
  getPublicaciones():Observable<any>{
    return this._http.get(this.url+'publicaciones');
  }

  getPublicacion(id):Observable<any>{
    return this._http.get(this.url+'publicacion/'+id);
  }
  buscar(buscar):Observable<any>{
    return this._http.get(this.url+'buscar/'+buscar);
  }
  save (publicacion):Observable<any>{
    const publ= JSON.stringify(publicacion);
    const headers = { 'content-type': 'application/json'}
    return this._http.post<any>(this.url+'save',publ,{'headers':headers})
       .pipe(
         catchError((err) => {
           console.error(err);
           throw err;
         }
       ));
    }

    update (id,publicacion):Observable<any>{
      const publ= JSON.stringify(publicacion);
      const headers = { 'content-type': 'application/json'}
      return this._http.put<any>(this.url+'publicacion/'+id,publ,{'headers':headers})
         .pipe(
           catchError((err) => {
             console.error(err);
             throw err;
           }
         ));
    }

    delete (id):Observable<any>{
      return this._http.delete<any>(this.url+'publicacion/'+id)
         .pipe(
           catchError((err) => {
             console.error(err);
             throw err;
           }
         ));
    }

    search(string):Observable<any>{
      return this._http.get<any>(this.url+'buscar/'+string);

    }





}
