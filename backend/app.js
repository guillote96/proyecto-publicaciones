'use strict'

var express= require('express');
var bodyParser =require('body-parser');


var app=express();

var publicacion_routes= require('./routes/publicacion');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api',publicacion_routes);


module.exports=app;