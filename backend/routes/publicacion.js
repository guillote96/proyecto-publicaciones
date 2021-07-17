'use strict'

var express= require ('express');
var PublicacionController= require('../controllers/publicacion');

var router = express.Router();

router.get('/probando',PublicacionController.probando);
router.get('/test',PublicacionController.test);


router.post('/save',PublicacionController.save);



module.exports= router;