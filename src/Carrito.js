import React, { useState } from 'react';
import { useCart } from './CartContext';
import './carrito.css'
import {Link} from "react-router-dom";

const Carrito = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [selectedQuantities, setSelectedQuantities] = useState({});

  const handleQuantityChange = (productId, quantity) => {
    setSelectedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
    updateQuantity(productId, quantity);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    setSelectedQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[productId];
      return updatedQuantities;
    });
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity * parseFloat(item.precio.replace(',', '.'));
    }, 0).toFixed(2);
  };

  return (
    <div className="carrito-container"> {/* Aplicar el estilo al contenedor */}
      <h2>Carrito de compras</h2>
      <ul className='carrito-list'>
        {cartItems.map((item) => (
          <li key={item.id} className="carrito-item"> {/* Aplicar el estilo al elemento de la lista */}
            <span>{item.nombre}</span>
            <select value={selectedQuantities[item.id] || item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              >
              {[...Array(10).keys()].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <span>Precio total: {selectedQuantities[item.id] !== undefined ? parseFloat(item.precio.replace(',', '.')) * selectedQuantities[item.id] : parseFloat(item.precio.replace(',', '.')) * item.quantity}€</span> {/* Precio total del conjunto de productos */}
            <button className="btn-eliminar" onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button> {/* Botón para eliminar el producto del carrito */}
          </li>
        ))}
      </ul>
      <div className="total"> {/* Estilo para el total */}
      <h3>Total: {getTotalPrice()}€</h3>
      </div>
      <Link to="/PantallaPago">
        <button className='aceptar'>ACEPTAR</button>
      </Link>
    </div>
  );
};

export default Carrito;
