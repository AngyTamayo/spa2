const express = require('express')
const router = express.Router();
const distribuidoresController = require('../controller/distribuidoresController');
const pool = require('../database');

router.get('/', distribuidoresController.ListarDistribuidores);
router.put('/:id', distribuidoresController.ModificarDistribuidor);
router.post('/', distribuidoresController.AgregarDistribuidor);
router.delete('/:id', distribuidoresController.EliminarDistribuidor);

module.exports = router;