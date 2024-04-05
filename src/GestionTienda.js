import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Productos.css';
import { tienda } from './Inicio_comprador.js';
import {Link} from "react-router-dom";
import AñadirProducto from './AñadirProducto';

function GestionTienda() {
        const [products, setProducts] = useState([
        { id: 1, idTienda: 1 , nombre: 'Lomo', description: 'Lomo ibérico', foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF08GU6Mf9Kz6m5rFMG6gATiYKbTqQLO3sOP0PztQ5QQ&s", precio: '10'},
        { id: 2, idTienda: 1 , nombre: 'Chorizo', description: 'Chorizo de cantimpalo', foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgSTjY9gplXLJO4s6V8YOQemL9mv3Vl4iAu9vR_4EMg&s", precio: '5'},
        { id: 3, idTienda: 1 , nombre: 'Fuet', description: 'Fuet CasaTarradellas', foto: "https://images.openfoodfacts.org/images/products/848/000/055/1085/front_en.61.400.jpg", precio: '6'},
        ]);
const [editedProduct, setEditedProduct] = useState(null);
const { idTienda } = useParams();

const handleAddProduct = (newProduct) => {
    // Agregar el nuevo producto a la lista de productos
    setProducts([...products, newProduct]);
    // Podrías enviar una solicitud POST a tu servidor aquí para guardar el nuevo producto en la base de datos
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
    
const handleDeleteProduct = (id) => {
    // Eliminar el producto con el id proporcionado
    const updatedProducts = products.filter(producto => producto.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h1>{tienda.find(t => t.id === parseInt(idTienda))?.nombre}</h1>
      <h2>Productos:</h2>
      <ul className='producto'>
        {products.map((producto) => (
          <li key={producto.id} className='producto' >
            {editedProduct && editedProduct.id === producto.id ? (
              <div>
                <input type="text" name="nombre" value={editedProduct.nombre} onChange={handleChange} />
                <input type="text" name="description" value={editedProduct.description} onChange={handleChange} />
                <input type="text" name="precio" value={editedProduct.precio} onChange={handleChange} />
                <button onClick={handleUpdateProduct}>Guardar</button>
              </div>
            ) : (
              <div>
                <h3>{producto.nombre}</h3>
                <img src={producto.foto} alt={producto.nombre} />
                <p>{producto.description}</p>
                <p>Precio: {producto.precio}€</p>
                <button onClick={() => handleEditProduct(producto.id)}>Editar</button>
                <button onClick={() => handleDeleteProduct(producto.id)}>Eliminar</button>
                
              </div>
            )}
            
          </li>
        ))}
        <AñadirProducto onAddProduct={handleAddProduct} />
      </ul>
      
    </div>
  );
}

export default GestionTienda;