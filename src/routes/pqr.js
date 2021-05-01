const express = require('express')
const router = express.Router();
const pqrController = require('../controller/pqrController');
const pool = require('../database');

router.get('/', pqrController.ListarPqrs);
router.put('/:id', pqrController.ModificarPqr);
router.post('/', pqrController.AgregarPqr);
router.delete('/:id', pqrController.EliminarPqr);

module.exports = router;