import React, { useState } from 'react';
import { Carrito } from './Carrito.js';
import './PantallaPago.css';

function PantallaPago() {
  const [nombre, setNombre] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [cvv, setCvv] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleNumeroTarjetaChange = (e) => {
    setNumeroTarjeta(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <h2>Pago con Tarjeta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre del Titular:</label>
          <input type="text" id="nombre" value={nombre} onChange={handleNombreChange} />
        </div>
        <div>
          <label htmlFor="numeroTarjeta">Número de Tarjeta:</label>
          <input type="text" id="numeroTarjeta" value={numeroTarjeta} onChange={handleNumeroTarjetaChange} />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" value={cvv} onChange={handleCvvChange} />
        </div>
        <button type="submit">Pagar</button>
      </form>
    </div>
  );
}

export default PantallaPago;