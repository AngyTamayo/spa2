const express = require('express')
const router = express.Router();
const inicioController = require('../controller/inicioController');
const pool = require('../database');

router.get('/', inicioController.ListarInicios);
router.put('/:id', inicioController.ModificarInicio);
router.post('/', inicioController.AgregarInicio);
router.delete('/:id', inicioController.EliminarInicio);

module.exports = router;