const database = require('../database');
const express = require('express');

exports.ListarCompras = async (req,res) => {
        const pqr = await database.query("SELECT * FROM compra", (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
}

exports.AgregarCompra = async (req,res) => {
        const {idCompra,barrio,dirección,telefono} = req.body;
        const AgCompra = {idCompra,barrio,dirección,telefono};
        await database.query("INSERT INTO compra set ?", [AgCompra], (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send("datos exitosos")
            }
        });
}

exports.ModificarCompra = async (req,res) => {
    try {
        const { id } = req.params;
        const {idCompra,barrio,dirección,telefono} = req.body;
        const editar = {idCompra,barrio,dirección,telefono};
        const editarCompra= await database.query("UPDATE compra SET ? WHERE idCompra = ?", [editar, id]);

        res.status(200).json({editarCompra, msg: "compra modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarCompra = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM compra WHERE idCompra = ?", [id]);
        res.status(200).json({ msg: "compra eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}