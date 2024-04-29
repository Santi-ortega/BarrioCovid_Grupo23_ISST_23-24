import React, { createContext, useContext, useState } from 'react';

//En este archivo creamos un contexto (el carrito) para que todas las pantallas tengan acceso a él
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  //Función para añadir al carrito productos si no han sido añadidos antes
  const addToCart = (product) => {
    const existe = cartItems.findIndex(item => item.id === product.id);
    if (existe === -1) {
      // Convertir el precio a cadena si es necesario
      const precioString = product.precio.toString();
      // El producto no está en el carrito, lo agregamos
      setCartItems(prevCartItems => [...prevCartItems, { ...product, precio: precioString }]);
    }
  };

  //Función para actualiar la cantidad de cada producto que se añade al carrito de compra
  const updateQuantity = (productId, quantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  //Función que utilizamos para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  //Función utilizada para borrar todos los productos del carrito
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
