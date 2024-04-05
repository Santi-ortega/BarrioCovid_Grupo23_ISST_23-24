import React, { useState } from 'react';
import { useCart } from './CartContext';
import './carrito.css'
import {Link} from "react-router-dom";

const Carrito = () => {

  //Variables para tener el estado de los item del carrito y de la cantidad de cada item
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [selectedQuantities, setSelectedQuantities] = useState({});

  //Función para poder cambiar el número deseado de cada tipo de producto
  const handleQuantityChange = (productId, quantity) => {
    setSelectedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
    updateQuantity(productId, quantity);
  };

  //Función para eliminar un producto del carrito
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    setSelectedQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[productId];
      return updatedQuantities;
    });
  };

  //Función para calcular el precio total de la compra
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity * parseFloat(item.precio.replace(',', '.'));
    }, 0).toFixed(2);
  };

  //Renderizamos en la página ./carrito
  return (
    <div className="carrito-container">
      <h2>Carrito de compras</h2>
      <ul className='carrito-list'>
        {/*Mapeamos todos los productos que estén en el carrito*/}
        {cartItems.map((item) => (
          <li key={item.id} className="carrito-item">
            <span>{item.nombre}</span>{/*Nombre del producto*/}
            <select value={selectedQuantities[item.id] || item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}>
              {[...Array(10).keys()].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select> {/*Desplegable para elegir el número de productos de cada item añadido al carrito*/}
            <span>Precio total: {selectedQuantities[item.id] !== undefined ? parseFloat(item.precio.replace(',', '.')) * selectedQuantities[item.id] : parseFloat(item.precio.replace(',', '.')) * item.quantity}€</span> {/* Precio total del conjunto de items de cada producto */}
            <button className="btn-eliminar" onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button> {/* Botón para eliminar el producto del carrito */}
          </li>
        ))}
      </ul>
      <div className="total">
      <h3>Total: {getTotalPrice()}€</h3>{/*Aquí sale el precio total de la compra*/}
      </div>
      <Link to="/PantallaPago">
        <button className='aceptar'>ACEPTAR</button>{/*Botón para aceptar la cesta y pasar a la pantalla de pago*/}
      </Link>
    </div>
  );
};

export default Carrito;
