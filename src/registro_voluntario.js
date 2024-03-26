import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import './registros.css';
import BackButton from './BackButton';

function Registro_Voluntario() {
    return (
        <div>
          <h2>Registro de Voluntario</h2>
          <form className='form'>
            <div className='apartado'>
              <label>Nombre</label>
              <input type="text"/>
            </div>
            <div className='apartado'>
              <label>Apellidos</label>
              <input type="text"/>
            </div>
            <div className='apartado'>
              <label>Teléfono</label>
              <input type="text" />
            </div>
            <div className='apartado'>
              <label>Correo</label>
              <input type="text" />
            </div>            
            <div className='apartado'>
              <label>Contraseña</label>
              <input type="password" />
            </div>
            <div className='apartado'>
              <label>Repetir Contraseña</label>
              <input type="password"/>
            </div>
            <div className='apartado'>
              <label>Dirección</label>
              <input type="text"/>
            </div>
            <div className='apartado'>
              <label>Horario</label>
              <input type="text"/>
            </div>
            <div>
            <button type="submit">Registrarse</button>
            </div>
          </form>
          <BackButton/>
        </div>
  );
}
export default Registro_Voluntario;
