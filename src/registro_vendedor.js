import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import './registros.css';
import BackButton from './BackButton';
import SubirFoto from './SubirFoto';
import './Inicio_comprador.css'
import axios from 'axios';

//Pantalla para que los vendedores se registren
function Registro_Vendedor() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [direccion, setDireccion] = useState('');
  const [tienda, setTienda] = useState('');
  const [horario, setHorario] = useState('');
  const [imagen, setImagen] = useState('');
  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      nombre,
      apellido,
      telefono,
      correo,
      contraseña,
      direccion,
      tienda,
      horario,
      imagen
    };

    try {
      const response = await axios.post('http://localhost:8080/vendedor/registro', data)

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
  const onImageChange = (e) => {
    const selectedFile = e.target.files[0]; // Accede al primer archivo seleccionado
    if (selectedFile) {
      setImagen(selectedFile); // Establece el archivo seleccionado como la imagen
    } else {
      console.error("No se seleccionó ningún archivo.");
    }
  };

  if (registroExitoso) {
    return (
      <div>
        <h2 className='registro_vendedor'>Registro de Vendedor</h2>
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
          <h2>Registro de Vendedor</h2>
          {/*Creamos un form para que el vendedor rellene y guardemos en la base de datos*/}
          <form className='form' onSubmit={handleSubmit}>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Nombre</label>
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Apellidos</label>
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
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Tienda</label>
              <input type="text" value={tienda} onChange={(e) => setTienda(e.target.value)} required/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Horario</label>
              <input type="text" value={horario} onChange={(e) => setHorario(e.target.value)} required/>
            </div>
              <div className='apartado'>
                <label className='parametro_registro_comprador'>Imagen</label> 
                <SubirFoto onImageChange={onImageChange}/>  
              </div>
            <div>
            <button type="submit">Registrarse</button>
            </div>
          </form>
          <BackButton/>
        </div>
  );
}
export default Registro_Vendedor;
