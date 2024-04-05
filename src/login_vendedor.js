import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import './login.css'
import BackButton from './BackButton';

//Esta es la página para que el vendedor se loguee
function Login_vendedor() {

  const [error, setError] = useState(false); //Parametro para informar de un posible error
  const [datosUsuario, setDatosUsuario] = useState({ correoElectronico: '', contrasena: '' }); //Almacenamiento correo y contraseña
  const navigate = useNavigate(); //Parámetro para navegar entre pantallas
  const handleClick = (id) => {
    navigate(`/login_vendedor/Inicio_vendedor`);
  }

  //Renderizamos la página
    return (
      <div>
        <h1>Inicio de sesión</h1>
        <br></br>
        {/*Creamos un form que enviará el vendedor para identificarse cada vez que quiera iniciar sesión*/}
        <form onSubmit={handleClick}>
          <div className="form-group">
            <label className='parametro_inicio_sesion' htmlFor="usuario">Usuario:</label>
            <input type="text" id="usuario"/> {/*El vendedor introducirá el usuario con el que se registró*/}
          </div>
          <div className="form-group">
            <label className='parametro_inicio_sesion' htmlFor="contraseña">Contraseña:</label>
            <input type="password" id="contraseña" /> {/*El vendedor introducirá la contraseña con la que se registró*/}
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