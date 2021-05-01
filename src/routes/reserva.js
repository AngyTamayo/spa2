const express = require('express')
const router = express.Router();
const reservaController = require('../controller/reservaController');
const pool = require('../database');

router.get('/', reservaController.ListarReservas);
router.put('/:id', reservaController.ModificarReserva);
router.post('/', reservaController.AgregarReserva);
router.delete('/:id', reservaController.EliminarReserva);

module.exports = router;