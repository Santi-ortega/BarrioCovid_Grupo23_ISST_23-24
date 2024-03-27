import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import './login.css'
import BackButton from './BackButton';

function Login() {
    return (
      <div>
        <h1>Inicio de sesión</h1>
        <br></br>
        <form>
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
  

export default Login;