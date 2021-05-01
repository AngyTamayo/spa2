const express = require('express')
const router = express.Router();
const empleadoController = require('../controller/empleadoController');
const pool = require('../database');

router.get('/', empleadoController.ListarEmpleados);
router.put('/:id', empleadoController.ModificarEmpleado);
router.post('/', empleadoController.AgregarEmpleado);
router.delete('/:id', empleadoController.EliminarEmpleado);

module.exports = router;