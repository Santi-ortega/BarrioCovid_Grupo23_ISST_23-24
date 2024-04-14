import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Productos.css';
import { tiendasData } from './Inicio_comprador.js';
import {Link} from "react-router-dom";
import AñadirProducto from './AñadirProducto';

function GestionTienda() {
        const [products, setProducts] = useState([]);
        const [editedProduct, setEditedProduct] = useState(null);
        const { idTienda } = useParams();
        const [newProduct, setNewProduct] = useState({
          nombre: '',
          descripcion: '',
          foto: '',
          precio: '',
          stock: ''
        });
      
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
          // Buscar el producto que se desea editar
          const productToEdit = products.find(producto => producto.id === id);
          // Establecer el producto a editar en el estado
          setEditedProduct(productToEdit);
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
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          // Actualizar el estado del producto editado
          setEditedProduct({ ...editedProduct, [name]: value });
        };
        const handleFileChange = (e) => {
          const file = e.target.files[0]; // Obtiene el primer archivo seleccionado
          // Puedes hacer lo que necesites con el archivo aquí, como almacenarlo en el estado
          setNewProduct({ ...newProduct, foto: file });
        };
        const handleDeleteProduct = (id) => {
          // Eliminar el producto con el id proporcionado
          const updatedProducts = products.filter(producto => producto.id !== id);
          setProducts(updatedProducts);
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
                <button onClick={() => handleEditProduct(producto.id)}>Editar</button>
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
