import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importamos useNavigate en lugar de useHistory
import axios from 'axios';

const EditarProducto = () => {
  const { id } = useParams();
  const{idVendedor}= useParams();
  const navigate = useNavigate(); // Usamos useNavigate en lugar de useHistory
  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: ''
  });

  // Función para cargar los detalles del producto desde la base de datos
  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/productos/${id}`);
        setProducto(response.data);
      } catch (error) {
        console.error('Error al cargar el producto:', error);
      }
    };

    fetchProducto();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleGuardarCambios = async () => {
    try {
      await axios.put(`http://localhost:8080/productos/${id}`, producto);
      // Redireccionar al usuario de vuelta a la página de productos después de guardar los cambios
      navigate(`/login_vendedor/Inicio_vendedor/${idVendedor}/GestionTienda`);
      // Utilizamos navigate en lugar de history.push
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };

  return (
    <div>
      <h2>Editar Producto</h2>
      <form>
        <label>
          Nombre:
          <input type="text" name="nombre" value={producto.nombre} onChange={handleChange} />
        </label>
        <label>
          Descripción:
          <input type="text" name="descripcion" value={producto.descripcion} onChange={handleChange} />
        </label>
        <label>
          Precio:
          <input type="text" name="precio" value={producto.precio} onChange={handleChange} />
        </label>
        <label>
          Stock:
          <input type="text" name="stock" value={producto.stock} onChange={handleChange} />
        </label>
        <button type="button" onClick={handleGuardarCambios} style={{ backgroundColor: '#6a6446', color: '#ffffff', border: 'none', padding: '10px 20px', fontSize: '12px' }}>Guardar Cambios</button>      </form>
    </div>
  );
};

export default EditarProducto;


