import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import './registros.css';
import BackButton from './BackButton';

function Registro_Comprador() {
    return (
        <div>
          <h2 className='inicio_registro'>Registro de Comprador</h2>
          <form className='form'>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Nombre</label>
              <input type="text"/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Apellido</label>
              <input type="text"/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Usuario</label>
              <input type="text"/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Teléfono</label>
              <input type="text" />
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Correo</label>
              <input type="text" />
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Contraseña</label>
              <input type="password"/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Dirección</label>
              <input type="text" />
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Soy Vulnerable</label>
              <input type="checkbox"/>
            </div>
            <div>
            <button type="submit">Registrarse</button>
            </div>
          </form>
          <BackButton/>
        </div>
  );
}
export default Registro_Comprador;

