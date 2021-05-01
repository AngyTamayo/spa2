const database = require('../database');
const express = require('express');

exports.ListarServicios = async (req,res) => {
        const servicio = await database.query("SELECT * FROM servicio", (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
}

exports.AgregarServicio = async (req,res) => {
        const {servicio, descripcion, precio} = req.body;
        const AgServicio = {servicio, descripcion, precio};
        await database.query("INSERT INTO servicio set ?", [AgServicio], (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send("datos exitosos")
            }
        });
}

exports.ModificarServicio = async (req,res) => {
    try {
        const {idServicio} = req.params;
        const {servicio, descripcion, precio} = req.body;
        const editar = {servicio, descripcion, precio};
        const editarServi = await database.query("UPDATE servicio SET ? WHERE idServicio = ?", [editar, idServicio]);

        res.status(200).json({editarServi, msg: "servicio modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarServicio = async (req,res) => {
    try {
        const {idServicio} = req.params;
        await database.query("DELETE FROM servicio WHERE idServicio = ?", [idServicio]);
        res.status(200).json({ msg: "servicio eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}