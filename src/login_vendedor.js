import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import './login.css'
import BackButton from './BackButton';
import './Inicio_comprador.css'
import axios from 'axios';

//Esta es la página para que el vendedor se loguee
function Login_vendedor() {

  const [error, setError] = useState(false); //Parametro para informar de un posible error
  const [datosUsuario, setDatosUsuario] = useState({ correoElectronico: '', contraseña: '' }); //Almacenamiento correo y contraseña
  const navigate = useNavigate(); //Parámetro para navegar entre pantallas


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await axios.post('http://localhost:8080/vendedor/login', datosUsuario);
      if (response.status === 200) {
        const idVendedor = response.data.id; // Suponiendo que el ID del vendedor está en response.data
        navigate(`/login_vendedor/Inicio_vendedor/${idVendedor}`);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error('Error de red:', error);
      setError(true);
    }
  };
  

  //Renderizamos la página
    return (
      <div>
        <h1>Inicio de sesión</h1>
        <br></br>
        {/*Creamos un form que enviará el vendedor para identificarse cada vez que quiera iniciar sesión*/}
        <form onSubmit={handleSubmit}>
          <div className="store">
            <label className='parametro_inicio_sesion' htmlFor="usuario">Usuario:</label>
            <input type="email" value={datosUsuario.correo} onChange={(event) => setDatosUsuario({ ...datosUsuario, correo: event.target.value })} required /> {/*El vendedor introducirá el usuario con el que se registró*/}
          </div>
          <div className="store">
            <label className='parametro_inicio_sesion' htmlFor="contraseña">Contraseña:</label>
            <input type="password" value={datosUsuario.contraseña} onChange={(event) => setDatosUsuario({ ...datosUsuario, contraseña: event.target.value })} required /> {/*El vendedor introducirá la contraseña con la que se registró*/}
          </div>
          <div className="store">
            <button type="submit">Aceptar</button>
          </div>
          {error && <p>Error al iniciar sesión. Verifica tus credenciales e intenta de nuevo.</p>}
        </form>
        <BackButton/>
      </div>
    );
  }
  

export default Login_vendedor;