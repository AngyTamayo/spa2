const express = require('express')
const router = express.Router();
const inventarioController = require('../controller/inventarioController');
const pool = require('../database');

router.get('/', inventarioController.ListarInventarios);
router.put('/:id', inventarioController.ModificarInventario);
router.post('/', inventarioController.AgregarInventario);
router.delete('/:id', inventarioController.EliminarInventario);

module.exports = router;