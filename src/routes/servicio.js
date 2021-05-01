const express = require('express')
const router = express.Router();
const servicioController = require('../controller/servicioController');
const pool = require('../database');

router.get('/', servicioController.ListarServicios);
router.put('/:idServicio', servicioController.ModificarServicio);
router.post('/', servicioController.AgregarServicio);
router.delete('/:idServicio', servicioController.EliminarServicio);

module.exports = router;