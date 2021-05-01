const express = require('express')
const router = express.Router();
const productoController = require('../controller/productoController');
const pool = require('../database');

router.get('/', productoController.ListarProductos);
router.put('/:idProducto', productoController.ModificarProducto);
router.post('/', productoController.AgregarProducto);
router.delete('/:idProducto', productoController.EliminarProducto);

module.exports = router;