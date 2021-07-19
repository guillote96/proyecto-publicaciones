'use strict'

var mongoose=require('mongoose');
var Schema=mongoose.Schema;


var PublicacionSchema= Schema({
    id:String,
    nombre:String,
    descripcion:String,
    precio: Number,
    imagen:String
})

module.exports=mongoose.model('Publicacion',PublicacionSchema);