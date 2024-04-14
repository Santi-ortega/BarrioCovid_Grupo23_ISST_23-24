import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import './registros.css';
import BackButton from './BackButton';
import './Inicio_comprador.css'
import axios from 'axios';

//Pantalla para que los compradores se registren
function Registro_Comprador() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [direccion, setDireccion] = useState('');
  const [isVulnerable, setIsVulnerable] = useState(true);
  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault ();
    const data = {
      nombre,
      apellido,
      telefono,
      correo,
      contraseña,
      direccion,
      isVulnerable
    };

    try {
      const response = await axios.post('http://localhost:8080/comprador/registro', data)
      if (response.status === 200) {
        // Registro exitoso
        setRegistroExitoso(true);
      } else {
        // Manejar error en caso de fallo en el registro
        setError('Error al registrar el comprador');
      }
    } catch (error) {
      console.error('Error de red:', error);
      setError('Error de red: No se pudo conectar con el servidor');
    }
  };

  if (registroExitoso) {
    return (
      <div>
        <h2 className='registro_comprador'>Registro de Comprador</h2>
        <p>¡Registro exitoso! Serás redirigido en unos momentos...</p>
        {/* Redirigir al usuario después de un tiempo */}
        {setTimeout(() => {
          window.location.href = '/'; // Redirigir al usuario después de 2 segundos
        }, 2000)}
        <BackButton />
      </div>
    );
  }
  
    return (
        <div>
          <h2 className='registro_comprador'>Registro de Comprador</h2>
          {/*Creamos un form para que el comprador rellene y guardemos en la base de datos*/}
          <form className='form' onSubmit={handleSubmit}>
            <div className='apartado'>
              <li className='parametro_registro_comprador'>Nombre</li>
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Apellido</label>
              <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Teléfono</label>
              <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} required/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Correo</label>
              <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} required/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Contraseña</label>
              <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Dirección</label>
              <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} required/>
            </div>
            <div className='store'>
              <label className='parametro_registro_comprador'>Soy Vulnerable</label>
              <input type="checkbox" checked={isVulnerable} onChange={(e) => setIsVulnerable(e.target.checked)} />
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

