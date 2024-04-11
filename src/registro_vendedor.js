import React, { useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import './registros.css';
import BackButton from './BackButton';
import './Inicio_comprador.css'

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
  const [imagen, setImagen] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", fileInputRef.current.files[0]);

    // Send the formData to the server using fetch or axios
  };
  
    return (
        <div>
          <h2>Registro de Vendedor</h2>
          {/*Creamos un form para que el vendedor rellene y guardemos en la base de datos*/}
          <form onSubmit={handleSubmit} className='form'>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Nombre</label>
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Apellidos</label>
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
              <label className='parametro_registro_comprador'>Tienda</label>
              <input type="text" value={tienda} onChange={(e) => setTienda(e.target.value)}/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Horario</label>
              <input type="text" value={horario} onChange={(e) => setHorario(e.target.value)}/>
            </div>
            <div className='apartado'>
              <label className='parametro_registro_comprador'>Imagen</label> 
              <input type="file" accept=".jpg,.jpeg,.png" ref={fileInputRef} onChange={handleImageChange}/>
              
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
