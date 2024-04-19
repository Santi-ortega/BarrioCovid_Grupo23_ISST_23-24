import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Productos.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';

function Productos() {
  const { idVendedor } = useParams(); // Obtener el ID del vendedor desde la URL
  const { idComprador } = useParams();
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const { addToCart } = useCart(); // Función para agregar productos al carrito

  useEffect(() => {
    // Función para obtener los productos del servidor filtrados por el ID del vendedor
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/productos?idVendedor=${idVendedor}`);
        setProducts(response.data); // Actualizar el estado de los productos con los datos recibidos
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); // Llamar a la función para obtener los productos
  }, [idVendedor]); // La llamada a useEffect se realizará cada vez que cambie el ID del vendedor

  // Función para agregar un producto al carrito
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <h2>Productos:</h2>
      <Link to={`/Carrito/${idComprador}/${idVendedor}`}>
        <button className="botonCarrito">
          <FontAwesomeIcon icon={faShoppingCart} />{/*Botón para ir al carrito*/}
        </button>
      </Link>
      <ul className="producto">
        {/*Mapeamos los productos para que salgan por pantalla */}
        {products.map((producto) => (
          <li key={producto.id} className="producto">
            <h3>{producto.nombre}</h3>
            <img src={producto.foto} alt={producto.nombre} />
            <p>{producto.descripcion}</p>
            <p>Precio: {producto.precio}€</p>
            <button onClick={() => handleAddToCart(producto)}>Añadir al Carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;
