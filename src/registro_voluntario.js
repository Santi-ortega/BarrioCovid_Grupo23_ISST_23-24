import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import './registros.css';
import BackButton from './BackButton';

function Registro_Voluntario() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [direccion, setDireccion] = useState('');
  const [horario, setHorario] = useState('');
    return (
        <div>
          <h2>Registro de Voluntario</h2>
          <form className='form'>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Nombre</label>
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Apellido</label>
              <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Teléfono</label>
              <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Correo</label>
              <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
            </div>            
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Contraseña</label>
              <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)}/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Dirección</label>
              <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)}/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Horario</label>
              <input type="text" value={horario} onChange={(e) => setHorario(e.target.value)}/>
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
