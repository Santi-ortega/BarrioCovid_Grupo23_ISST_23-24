import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import './login.css'
import BackButton from './BackButton';
import './Inicio_comprador.css';
import axios from 'axios';

//Página donde se loguean los compradores
function Login_comprador() {
  const [error, setError] = useState(false);
  const [datosUsuario, setDatosUsuario] = useState({ correoElectronico: '', contraseña: '' }); //Almacen correo y contraseña
  const navigate = useNavigate();

  //Con esto controlamos que cuando se cliquee, se redirija a la lista de tiendas accesibles por el comprador
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await axios.post('http://localhost:8080/comprador/login', datosUsuario);
      if (response.status === 200) {
        const idComprador = response.data.id;
        navigate(`/login_comprador/Inicio_comprador/${idComprador}`);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error('Error de red:', error);
      setError(true);
    }
  };

  return (
    <div>
      <h1>Inicio de sesión</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label className="parametro_inicio_sesion" htmlFor="correoElectronico">Correo electrónico:</label>
          <input type="email" value={datosUsuario.correo} onChange={(event) => setDatosUsuario({ ...datosUsuario, correo: event.target.value })} required />
        </div>
        <div className="input">
          <label className="parametro_inicio_sesion" htmlFor="contrasena">Contraseña:</label>
          <input type="password" value={datosUsuario.contraseña} onChange={(event) => setDatosUsuario({ ...datosUsuario, contraseña: event.target.value })} required />
        </div>
        <div className="input">
          <button type="submit">Aceptar</button>
        </div>
        {error && <p>Error al iniciar sesión. Verifica tus credenciales e intenta de nuevo.</p>}
      </form>
      <BackButton />
    </div>
  );
}

export default Login_comprador;