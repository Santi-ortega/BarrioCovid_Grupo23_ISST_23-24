import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import './registros.css';
import BackButton from './BackButton';

function Registro_Comprador() {
    return (
        <div>
          <h2>Registro de Comprador</h2>
          <form className='form'>
            <div className='apartado'>
              <label>Nombre</label>
              <input type="text"/>
            </div>
            <div className='apartado'>
              <label>Apellido</label>
              <input type="text"/>
            </div>
            <div className='apartado'>
              <label>Usuario</label>
              <input type="text" />
            </div>
            <div className='apartado'>
              <label>Contraseña</label>
              <input type="password"/>
            </div>
            <div className='apartado'>
              <label>Dirección</label>
              <input type="text" />
            </div>
            <div className='apartado'>
              <label>Teléfono</label>
              <input type="text" />
            </div>
            <div className='apartado'>
              <label>Soy Vulnerable</label>
              <input type="checkbox"/>
            </div>
            <button type="submit">Registrarse</button>
          </form>
          <BackButton/>
        </div>
  );
}
export default Registro_Comprador;

