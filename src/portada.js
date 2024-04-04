import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import './portada.css';
function Portada() {
  return (
    <div>
        <h1 className="portada_frases">¡Bienvenido a BarrioCovid! Si quiere iniciar sesión pulse en el botón asignado a su rol:</h1>
        <br/>
        <div className="buttonContainer">
          <NavLink to="/login_comprador">
            <button>Comprador</button>
          </NavLink>
          <NavLink to="/login_vendedor">
            <button>Vendedor</button>
          </NavLink>
          <NavLink to="/login">
            <button>Voluntario</button>
          </NavLink>
        </div>
        <h1 className="portada_frases">Si no tiene cuenta, registrese:</h1>
        <div className="buttonContainer">
        <NavLink to="/registro_comprador">
          <button>Comprador</button>  
        </NavLink>
        <NavLink to="/registro_vendedor">
            <button type="submit">Vendedor</button>
        </NavLink>
        <NavLink to="/registro_voluntario">
            <button type="submit">Voluntario</button>
        </NavLink>
        </div>
    </div>
  );
}
export default Portada;
