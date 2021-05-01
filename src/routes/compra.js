const express = require('express')
const router = express.Router();
const compraController = require('../controller/compraController');
const pool = require('../database');

router.get('/', compraController.ListarCompras);
router.put('/:id', compraController.ModificarCompra);
router.post('/', compraController.AgregarCompra);
router.delete('/:id', compraController.EliminarCompra);

module.exports = router;