import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './portada.css';
import './Inicio_comprador.css'

//Esta es la primera pantalla de la aplicación donde se da la opción de registrarse o hacer login
function Portada() {
  return (
    <div>
        <h1 className="portada_frases">¡Bienvenido a BarrioCovid! Si quiere iniciar sesión pulse en el botón asignado a su rol:</h1>
        <br/>
        <div className="store">
          <NavLink to="/login_comprador">
            <button>Comprador</button>
          </NavLink>
          <NavLink to="/login_vendedor">
            <button>Vendedor</button>
          </NavLink>
          <NavLink to="/login_voluntario">
            <button>Voluntario</button>
          </NavLink>
        </div>
        <h1 className="portada_frases">Si no tiene cuenta, registrese:</h1>
        <div className="store">
        <NavLink to="/registro_comprador">
          <button>Comprador</button>  
        </NavLink>
        <NavLink to="/registro_vendedor">
            <button>Vendedor</button>
        </NavLink>
        <NavLink to="/registro_voluntario">
            <button>Voluntario</button>
        </NavLink>
        </div>
    </div>
  );
}
export default Portada;
