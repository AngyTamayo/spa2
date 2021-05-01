const database = require('../database');
const express = require('express');

exports.ListarUsuarios = async (req,res) => {
        const usuario = await database.query("SELECT * FROM usuario", (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
}

exports.AgregarUsuario = async (req,res) => {
        const { nombre, edad, correo} = req.body;
        const AgUsuario = {nombre, edad, correo};
        await database.query("INSERT INTO usuario set ?", [AgUsuario], (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send("datos exitosos")
            }
        });
}

exports.ModificarUsuario = async (req,res) => {
    try {
        const {idUsuario} = req.params;
        const {nombre, edad, correo} = req.body;
        const editar = {nombre, edad, correo};
        const editarUsu = await database.query("UPDATE usuario SET ? WHERE idUsuario = ?", [editar, idUsuario]);

        res.status(200).json({editarUsu, msg: "usuario modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarUsuario = async (req,res) => {
    try {
        const {idUsuario} = req.params;
        await database.query("DELETE FROM usuario WHERE idUsuario = ?", [idUsuario]);
        res.status(200).json({ msg: "usuario eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}