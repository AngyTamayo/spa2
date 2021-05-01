const express = require('express')
const router = express.Router();
const comidasController = require('../controller/comidasController');
const pool = require('../database');

router.get('/', comidasController.ListarComidas);
router.put('/:id', comidasController.ModificarComida);
router.post('/', comidasController.AgregarComida);
router.delete('/:id', comidasController.EliminarComida);

module.exports = router;