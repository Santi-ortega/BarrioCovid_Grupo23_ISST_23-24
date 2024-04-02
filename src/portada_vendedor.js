import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import './registros.css';
import BackButton from './BackButton';

function Portada_Vendedor() {
    return (
        <div>
          <h2>Portada Vendedor</h2>
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
            <button type="submit">Gestionar Tienda</button>
            </div>     
            </form>
            <BackButton/>
        </div>
    );
}
export default Portada_Vendedor;