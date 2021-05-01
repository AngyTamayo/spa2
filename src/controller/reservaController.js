const database = require('../database');
const express = require('express');

exports.ListarReservas = async (req,res) => {
        const servicio = await database.query("SELECT * FROM reserva", (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
}

exports.AgregarReserva = async (req,res) => {
        const {idReserva,servicio, fecha, nombre} = req.body;
        const AgReserva = {idReserva,servicio, fecha, nombre};
        await database.query("INSERT INTO reserva set ?", [AgReserva], (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send("datos exitosos")
            }
        });
}

exports.ModificarReserva = async (req,res) => {
    try {
        const { id } = req.params;
        const {idReserva,servicio, fecha, nombre} = req.body;
        const editar = {idReserva,servicio, fecha, nombre};
        const editarReser = await database.query("UPDATE reserva SET ? WHERE idReserva = ?", [editar, id]);

        res.status(200).json({editarReser, msg: "reserva modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarReserva = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM reserva WHERE idReserva = ?", [id]);
        res.status(200).json({ msg: "reserva eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}