'use strict'
var validator = require('validator')
var Publicacion = require('../models/publicacion');


var controller ={

        probando:(req,res)=>{
            return res.status(200).send(`<p>probando</p>`);
        },

        test:(req,res)=>{
            return res.status(200).send(`<p>test</p>`);
        },

        save:(req,res)=>{

            var parametros = req.body;

            try {
                var nombrevalido = !validator.isEmpty(parametros.nombre);
                var idvalido = !validator.isEmpty(parametros.id);
                var descripcionvalida = !validator.isEmpty(parametros.descripcion);

    
            } catch (err) {
                return res.status(500).send({
                    status: "error",
                    message: "Faltan Parametros!!!"
                });
    
            }

            if(nombrevalido && idvalido && descripcionvalida){
                return res.status(200).send({
                    status: "Success",
                    message: "Validacion Correcta"
                });

            }else{
                return res.status(500).send({
                    status: "error",
                    message: "Validacion Incorrecta!!!"
                });

            }

        }





};

module.exports=controller;