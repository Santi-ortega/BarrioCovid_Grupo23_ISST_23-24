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
              <label className='parametro_registro_comprador'>Nombre</label>
              <input type="text"/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Apellidos</label>
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
              <input type="password" />
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Repetir Contraseña</label>
              <input type="password"/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Dirección</label>
              <input type="text"/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Horario</label>
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
