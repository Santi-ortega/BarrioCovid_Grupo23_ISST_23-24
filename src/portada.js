import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";

function Portada() {
  return (
    <div>
      <h1 id="portada_frases">¡Bienvenido a BarrioCovid! Si quiere iniciar sesión pulse en el botón asignado a su rol:</h1>
      <div className="buttonContainer">
        <button>Comprador</button>
        <button>Vendedor</button>
        <button>Voluntario</button>
      </div>
    </div>
  );
}
export default Portada;