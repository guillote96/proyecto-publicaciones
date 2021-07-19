'use strict'
var validator = require('validator')
var Publicacion = require('../models/publicacion');

var path = require('path');
var fs = require('fs');


var controller ={

        probando:(req,res)=>{
            return res.status(200).send(`<p>probando</p>`);
        },

        test:(req,res)=>{
            return res.status(200).send(`<p>test</p>`);
        },

        save:(req,res)=>{

            var parametros = req.body;
            console.log(parametros);

            try {
                var nombrevalido = !validator.isEmpty(parametros.nombre);
                var idvalido = !validator.isEmpty(parametros.id);
                var descripcionvalida = !validator.isEmpty(parametros.descripcion);
                var imagenvalido = !validator.isEmpty(parametros.imagen);

    
            } catch (err) {
                return res.status(500).send({
                    status: "error",
                    message: "Faltan Parametros!!!"
                });
    
            }

            if(nombrevalido && idvalido && descripcionvalida  && imagenvalido){
                var publicacion = new Publicacion();
                publicacion.id=parametros.id;
                publicacion.nombre=parametros.nombre;
                publicacion.descripcion=parametros.descripcion;
                publicacion.precio=parametros.precio;
                publicacion.imagen=parametros.imagen;


                publicacion.save((err, publicacionStored) => {
                    if (err || !publicacionStored) {
                        return res.status(400).send({
                            status: 'error',
                            message: "No se guardo en articulo"
                        });
                    }
    
                });
    
    
                return res.status(200).send({
                    status: 'success',
                    publicacion: parametros
                });
    

            }else{
                return res.status(200).send({
                    message: "Parametros Invalidos!!"
                });

            }

        },

        publicaciones: (req, res) => {
            Publicacion.find({}).exec((err, publicaciones) => {
                if (err) {
                    return res.status(500).send({
                        status: "error",
                        message: "No se buscaron las publicaciones"
                    });
                }
    
                if (!publicaciones) {
                    return res.status(401).send({
                        status: "error",
                        message: "No hay publicaciones"
                    });
                }
    
                return res.status(200).send({
                    status: "success",
                    publicaciones
                });
    
            });
        },
        getPublicacion: (req, res) => {
            var id = req.params.id;
    
            if (id == null) {
                return res.status(401).send({
                    status: "error",
                    message: "Parametro Invalido!"
                });
    
    
            }
            Publicacion.findById(id).exec((err, publicacion) => {
                if (err) {
                    return res.status(500).send({
                        status: "error",
                        message: "No se buscó un Publicacion"
                    });
                }
    
                if (!publicacion) {
                    return res.status(404).send({
                        status: "error",
                        message: "No existe la Publicacion"
                    });
                }
    
                return res.status(200).send({
                    status: "success",
                    publicacion
                });
    
            });
    
    
        },
        delete: (req, res) => {
            var id = req.params.id;
            Publicacion.findByIdAndRemove(id, (err, pubicacionDeleted) => {
                if (err) {
                    return res.status(500).send({
                        status: "error",
                        message: "No se pudo eliminar Publicacion!!"
                    });
                }
    
                if (!pubicacionDeleted) {
                    return res.status(400).send({
                        status: "error",
                        message: "No se encontro el Publicacion que se desea deletear"
                    });
                }
                return res.status(200).send({
                    status: "success",
                    pubicacionDeleted
                });
    
            });
    
        },

        update: (req, res) => {
            var id = req.params.id;
            var parametros = req.body;

    
            try {
                var nombrevalido = !validator.isEmpty(parametros.nombre);
                var idvalido = !validator.isEmpty(parametros.id);
                var descripcionvalida = !validator.isEmpty(parametros.descripcion)
                var imagenvalido = !validator.isEmpty(parametros.imagen);
    
            } catch (err) {
                return res.status(500).send({
                    status: "error",
                    message: "Faltan Parametros!!!"
                });
    
            }
    
            if(nombrevalido && idvalido && descripcionvalida && imagenvalido){
                Publicacion.findOneAndUpdate({"_id":id}, parametros, { new: true }, (err, publicacionUpdated) => {
    
                    if (err) {
                        
                        return res.status(500).send({
                            status: "error",
                            message: "No se pudo Actualizar"
                        });
                    }
    
                    if (!publicacionUpdated) {
                        return res.status(500).send({
                            status: "error",
                            message: "No se encontro la publicacion del ID especificado"
                        });
                    }
    
                    return res.status(200).send({
                        status: "success",
                        publicacionUpdated
                    });
    
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "Parametros Invalidos!!"
                });
            }
    
    
        },
        upload: (req, res) => {
            var file_name = "Imagen no subida...";
            if (!req.files) {
                return res.status(400).send({
                    status: "error",
                    message: file_name
                });
    
            }
    
            var file_path = req.files.file0.path;
            var file_split = file_path.split("/");
            var name = file_split[2];
            var ext = name.split('\.')[1];
    
            if (ext != 'png' && ext != 'jpg' && ext != 'gif' && ext != 'jpeg') {
                fs.unlink(file_path, (err) => {
                    return res.status(200).send({
                        status: "error",
                        message: "No es una imagen!!"
                    });
    
                });
    
            } else {
                var id = req.params.id;
                if(id){
                    Publicacion.findOneAndUpdate(id, { imagen: name }, { new: true }, (err, imageUpload) => {
                        if (err || !imageUpload) {
                            return res.status(500).send({
                                status: "error",
                                message: "No se pudo subir la Imagen"
                            });
                        }
        
                        return res.status(200).send({
                            status: "success",
                            message: imageUpload
                        });
        
                    });
    
                }else{
                    return res.status(200).send({
                        status: "success",
                        image: name
                    });
    
                }
            }
        },
        getImage: (req, res) => {
            var nombre = req.params.name;
            var directorio = './upload/publicaciones/' + nombre;
            fs.readFile(directorio, (err) => {
                if (err) {
                    return res.status(400).send({
                        status: "error",
                        message: "No sencontró el archivo!"
                    });
    
                } else {
                    return res.sendFile(path.resolve(directorio));
                }
    
            });
    
    
    
    
        },
        buscar: (req, res) => {
            var buscar = req.params.buscar;
            Publicacion.find({'nombre': {'$regex': buscar, '$options': 'i'}}, (err, publicaciones) => {
                if (err || !publicaciones) {
                    return res.status(500).send({
                        status: "error",
                        message: "No se pudo encontrar publicaciones"
                    });
                }
    
                return res.status(200).send({
                    status: "success",
                    publicaciones: publicaciones
                });
            });
        }





};

module.exports=controller;