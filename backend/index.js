'use strict'
var mongoose = require('mongoose');
var app=require('./app');
var port=3900;

mongoose.set('useFindAndModify',false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_proyecto',{useNewUrlParser:true}).then(()=>{
  console.log("conexion se ha realizado bien");

   app.listen(port,()=>{
      console.log("Servidor Funcionando! localhost:3900");
   });
});