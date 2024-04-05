import React, { useState } from 'react';
import { Carrito } from './Carrito.js';
import './PantallaPago.css';

//Esta es la pantalla de pago del comprasor
function PantallaPago() {

  const [nombre, setNombre] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [cvv, setCvv] = useState('');
  const [hour, setHour] = useState({});

  //Funcion para controlar el nombre que utiliza el comprador en su tarjeta
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  //Función para controlar el número de tarjeta que usa el comprador
  const handleNumeroTarjetaChange = (e) => {
    setNumeroTarjeta(e.target.value);
  };

  //Función para controlar el CVV que usa el comprador
  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  //Función para enviar el proceso de pago
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <h2>Pago con Tarjeta</h2>
      {/*Introducimos un form para adquirir los datos de pago del comprador*/}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre del Titular:</label>
          <input type="text" id="nombre" value={nombre} onChange={handleNombreChange} /> {/*El comprador introducirá el nombre del titular de la tarjeta*/}
        </div>
        <div>
          <label htmlFor="numeroTarjeta">Número de Tarjeta:</label>
          <input type="text" id="numeroTarjeta" value={numeroTarjeta} onChange={handleNumeroTarjetaChange} /> {/*El comprador introducirá el numero de la tarjeta*/}
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" value={cvv} onChange={handleCvvChange} /> {/*El comprador introducirá el CVV de la tarjeta*/}
        </div>
        <div>
          <label>Hora Recogida:</label>
        <select value={hour} onChange={(e) => setHour(parseInt(e.target.value))}> {/*El comprador introducirá la hora de recogida deseada*/}
  {[...Array(24).keys()].map((hour) => (
    <option key={hour + 1} value={hour + 1}>
      {hour + 1}:00
    </option>
  ))}
</select>
</div>
        <button type="submit">Pagar</button>
      </form>
    </div>
  );
}

export default PantallaPago;