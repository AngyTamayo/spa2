const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const mysql = require('mysql')
const cors = require('cors');


const app = express();
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'spa',
});
app.use(bodyParser.urlencoded({extended: true}))

app.post('/api/insert', (req,res)=>{
    const sqlInsert =
     "insert into usuario (nombre, correo) values (?,?)";
    db.query(sqlInsert, [nombre,correo], (err, result) => {});
    });


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));


const PORT = process.env.PORT || 3000;

app.use((req, res, next)=>{
    next();
});

const usuario = require('./routes/usuario');
app.use("/usuarios",usuario);

const servicio = require('./routes/servicio');
app.use("/servicios",servicio);

const reserva = require('./routes/reserva');
app.use("/reservas",reserva);

const producto = require('./routes/producto');
app.use("/productos",producto);

const pqr = require('./routes/pqr');
app.use("/pqr",pqr);

const inventario = require('./routes/inventario');
app.use("/inventarios",inventario);

const compra = require('./routes/compra');
app.use("/compras",compra);

const comidas = require('./routes/comidas');
app.use("/comidas",comidas);

const distribuidores = require('./routes/distribuidores');
app.use("/distribuidores",distribuidores);

const inicio = require('./routes/inicioS');
app.use("/inicio",inicio)

const empleado = require('./routes/empleado');
const { database } = require('./keys');
app.use("/empleados",empleado);




app.listen(PORT, () => {
    console.log("localhost:" + PORT);
})