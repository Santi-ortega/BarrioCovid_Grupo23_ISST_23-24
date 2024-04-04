import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import './login.css'
import BackButton from './BackButton';

function Login_vendedor() {
  const [error, setError] = useState(false);
  const [datosUsuario, setDatosUsuario] = useState({ correoElectronico: '', contrasena: '' }); //Almacen correo y contraseña
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/login_vendedor/Inicio_vendedor`);
  }
    return (
      <div>
        <h1>Inicio de sesión</h1>
        <br></br>
        <form onSubmit={handleClick}>
          <div className="form-group">
            <label className='parametro_inicio_sesion' htmlFor="usuario">Usuario:</label>
            <input type="text" id="usuario" />
          </div>
          <div className="form-group">
            <label className='parametro_inicio_sesion' htmlFor="contraseña">Contraseña:</label>
            <input type="password" id="contraseña" />
          </div>
          <div className="form-group">
            <button type="submit">Aceptar</button>
          </div>
        </form>
        <BackButton/>
      </div>
    );
  }
  

export default Login_vendedor;