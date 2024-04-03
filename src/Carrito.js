import React, { useState } from "react";
import { producto } from './Productos.js';
import {Link} from "react-router-dom";


const Carrito = ({ carrito, vaciarCarrito }) => {
  const [direccionEnvio, setDireccionEnvio] = useState("");
  const [total, setTotal] = useState(0);
  const [quantities, setQuantities] = useState({});
  const [hour, setHour] = useState({});


  const handleQuantityChange = (carrito, quantity) => {
    setQuantities(prevState => ({
      ...prevState,
      [carrito]: quantity
    }));
  };

  // Calcula el total del carrito
  const calcularTotal = () => {
    let total = 0;
    carrito.forEach((producto) => {
      total += producto.precio * producto.cantidad;
    });
    setTotal(total);
  };

  // Actualiza la dirección de envío
  const actualizarDireccion = (e) => {
    setDireccionEnvio(e.target.value);
  };

  
  
  // Procesa el pago y vacía el carrito
  const procesarPago = () => {
    // Realiza el proceso de pago...
    // Vacía el carrito
    
    // Redirige a la página de confirmación
    // (No incluido en este ejemplo)
  };
 
  return (
    <div>
      <h2>Carrito de Compra</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {carrito && carrito.map((producto, index) => (
            <tr key={index}>
              <td>{producto.nombre}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.precio}</td>
              <td>{producto.precio * producto.cantidad}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">Total:</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <h3>Dirección de Envío:</h3>
        <input type="text" value={direccionEnvio} onChange={actualizarDireccion} />
      </div>
      <div>
        
        <h3>Hora Recojida:</h3>
        
        <select value={hour} onChange={(e) => setHour(parseInt(e.target.value))}>
  {[...Array(24).keys()].map((hour) => (
    <option key={hour + 1} value={hour + 1}>
      {hour + 1}:00
    </option>
  ))}
</select>
      </div>
      
      <button onClick={calcularTotal}>Calcular Total</button>
      <Link to="/PantallaPago">
      <button onClick={procesarPago}>Pagar</button>
      </Link>
      
    </div>
  );
};

export default Carrito;