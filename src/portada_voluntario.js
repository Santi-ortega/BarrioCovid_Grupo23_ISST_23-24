import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import './registros.css';
import BackButton from './BackButton';

function Portada_Voluntario() {
    return (
        <div>
          <h2>Inicio Sesion</h2>
          <form className='form'>
            <div className='apartado'>
              <label>Correo</label>
              <input type="text"/>
            </div>
            <div className='apartado'>
              <label>Contraseña</label>
              <input type="password"/>
            </div>
            <div>
            <button type="submit">Aceptar</button>
            </div>     
            </form>
            <BackButton/>
        </div>
    );
}
export default Inicio_Sesion_Comprador;