import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Productos.css';
import { tiendasData } from './Inicio_comprador.js';
import {Link} from "react-router-dom";
import { NavLink, useNavigate } from 'react-router-dom';

function GestionTienda() {
        const [products, setProducts] = useState([]);
        const [editedProduct, setEditedProduct] = useState(null);
        const { idTienda } = useParams();
        const {idVendedor} = useParams();
        const [newProduct, setNewProduct] = useState({
          nombre: '',
          descripcion: '',
          foto: '',
          precio: '',
          stock: ''
        });

          // Función para cargar los productos al iniciar
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/productos`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    fetchProducts();
  }, [idTienda]);

        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setNewProduct({ ...newProduct, [name]: value });
        };
      
        const handleAddProduct = async (e) => {
          e.preventDefault();
          try {
            const response = await axios.post('http://localhost:8080/productos', newProduct);
            if (response.status === 201) {
              // Vuelve a cargar la lista de productos desde el servidor
              const updatedProducts = await axios.get('http://localhost:8080/productos');
              setProducts(updatedProducts.data);
              // Reinicia el formulario
              setNewProduct({
                nombre: '',
                descripcion: '',
                foto: '',
                precio: '',
                stock: ''
              });
            } else {
              console.error('Error al guardar el producto');
            }
          } catch (error) {
            console.error('Error de red:', error);
          }
        };
      
        const handleEditProduct = (id) => {

        };
      
        const handleUpdateProduct = () => {
          // Actualizar el producto editado
          const updatedProducts = products.map(producto => {
            if (producto.id === editedProduct.id) {
              return editedProduct; // Usar el producto editado
            }
            return producto; // Mantener los otros productos sin editar
          });
          // Actualizar el estado de los productos
          setProducts(updatedProducts);
          // Limpiar el estado del producto editado
          setEditedProduct(null);
        };

        const handleDeleteProduct = async (id) => {
          try {
            // Realizar la solicitud DELETE al servidor para eliminar el producto
            await axios.delete(`http://localhost:8080/productos/${id}`);
        
            // Actualizar el estado local de los productos eliminando el producto con el ID proporcionado
            const updatedProducts = products.filter(producto => producto.id !== id);
            setProducts(updatedProducts);
          } catch (error) {
            console.error('Error al eliminar el producto:', error);
          }
        };
        
      
        return (
          <div>
            <h1>{tiendasData.find(t => t.id === parseInt(idTienda))?.nombre}</h1>
            <h2>Productos:</h2>
            <ul className='producto'>
            {products.map(producto => (
              <li key={producto.id}>
              <div>
                <img src={producto.foto} alt={producto.nombre} />
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <p>Precio: {producto.precio}€</p>
                <p>Stock: {producto.stock}</p>
                <NavLink to={`/login_vendedor/Inicio_vendedor/${idVendedor}/edit/${producto.id}`}>
                <button>Editar</button>
                </NavLink>

                <button onClick={() => handleDeleteProduct(producto.id)}>Eliminar</button>
              </div>
              </li>
               ))}
            </ul>
            {/* Formulario para añadir un nuevo producto */}
            <form onSubmit={handleAddProduct}>
              <div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" value={newProduct.nombre} onChange={handleInputChange} required />
              </div>
              <div>
                <label htmlFor="description">Descripción:</label>
                <input type="text" id="descripcion" name="descripcion" value={newProduct.descripcion} onChange={handleInputChange} required />
              </div>
              <div>
                <label htmlFor="foto">Foto(URL):</label>
                 {/* Ahora utilizamos un input de tipo text para permitir la entrada de la URL de la imagen */}
                <input type="url" id="foto" name="foto" value={newProduct.foto} onChange={handleInputChange} required />
              </div>
              <div>
                <label htmlFor="precio">Precio:</label>
                <input type="number" id="precio" name="precio" value={newProduct.precio} onChange={handleInputChange} required />
              </div>
              <div>
                <label htmlFor="stock">Stock:</label>
                <input type="number" id="stock" name="stock" value={newProduct.stock} onChange={handleInputChange} required />
              </div>
              <button type="submit">Añadir Producto</button>
            </form>
          </div>
        );
      }
      
      export default GestionTienda;
