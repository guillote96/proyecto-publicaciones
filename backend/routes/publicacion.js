'use strict'

var express= require ('express');
var PublicacionController= require('../controllers/publicacion');

var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./upload/publicaciones'});

router.get('/probando',PublicacionController.probando);
router.get('/test',PublicacionController.test);


router.post('/save',PublicacionController.save);
router.get('/publicaciones',PublicacionController.publicaciones);
router.get('/publicacion/:id', PublicacionController.getPublicacion);
router.delete('/publicacion/:id', PublicacionController.delete);
router.put('/publicacion/:id', PublicacionController.update);
router.post('/upload/:id?',md_upload,PublicacionController.upload);
router.get('/get-imagen/:name',PublicacionController.getImage);
router.get('/buscar/:buscar',PublicacionController.buscar);


module.exports= router;