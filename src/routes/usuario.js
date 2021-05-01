const express = require('express')
const router = express.Router();
const usuarioController = require('../controller/usuarioController');
const pool = require('../database');

router.get('/', usuarioController.ListarUsuarios);
router.put('/:idUsuario', usuarioController.ModificarUsuario);
router.post('/', usuarioController.AgregarUsuario);
router.delete('/:idUsuario', usuarioController.EliminarUsuario);

module.exports = router;