import './App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios'

function App() {

    const [nombre,setNombre] = useState("")
    const [correo,setCorreo] = useState("")
    const submitReview = () => {
      Axios.post('http://localhost:3000/api/insert', {nombre: nombre,
       correo: correo
      }).then(() =>{
        alert("muy bien");
      });
    }
    return(
    <div className="App">CRUD APPLICATION
    
    <div className="form">
    <label>Nombre</label>
    <input type="text" name="nombre"
    onChange={(e) => {
      setNombre(e.target.value);
    }}
    />
    <label>Correo</label>
    <input type="text" name="correo"
    onChange={(e) => {
      setCorreo(e.target.value);
    }}
    />
    <button onClick={submitReview}>Enviar</button>
    </div>
    </div>
  );
}

export default App;
