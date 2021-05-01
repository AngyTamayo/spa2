const database = require('../database');
const express = require('express');

exports.ListarComidas = async (req,res) => {
        const comidas = await database.query("SELECT * FROM comidas", (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
}


exports.AgregarComida = async (req,res) => {
        const {idComidas,comida,bebida} = req.body;
        const AgComida = {idComidas,comida,bebida};
        await database.query("INSERT INTO comidas set ?", [AgComida], (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send("datos exitosos")
            }
        });
}

exports.ModificarComida = async (req,res) => {
    try {
        const { id } = req.params;
        const {idComidas,comida,bebida} = req.body;
        const editar = {idComidas,comida,bebida};
        const editarComida= await database.query("UPDATE comidas SET ? WHERE idComidas = ?", [editar, id]);

        res.status(200).json({editarComida, msg: "comida modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarComida = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM comidas WHERE idComidas = ?", [id]);
        res.status(200).json({ msg: "comidas eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}