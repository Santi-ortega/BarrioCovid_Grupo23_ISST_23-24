import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import './login.css'
import BackButton from './BackButton';
import './Inicio_comprador.css'

//Página donde se loguean los compradores
function Login_comprador() {
  const [error, setError] = useState(false);
  const [datosUsuario, setDatosUsuario] = useState({ correoElectronico: '', contrasena: '' }); //Almacen correo y contraseña
  const navigate = useNavigate();

  //Con esto controlamos que cuando se cliquee, se redirija a la lista de tiendas accesibles por el comprador
  const handleClick = (id) => {
    navigate(`/login_comprador/Inicio_comprador`);
  }

  //Renderizamos la pantalla
    return (
      <div>
        <h1>Inicio de sesión</h1>
        <br></br>
        {/*Creamos un form para que el usuario se autentique*/}
        <form onSubmit={handleClick}>
          <div className="input">
            <label className='parametro_inicio_sesion' htmlFor="usuario">Usuario:</label>
            <input type="text" id="usuario" /> {/*El comprador introducirá el usuario con el que se registró*/}
          </div>
          <div className="input">
            <label className='parametro_inicio_sesion' htmlFor="contraseña">Contraseña:</label>
            <input type="password" id="contraseña"/> {/*El comprador introducirá la contraseña con la que se registró*/}
          </div>
          <div className="input">
            <button type="submit">Aceptar</button>
          </div>
        </form>
        <BackButton/>
      </div>
    );
  }
  
export default Login_comprador;