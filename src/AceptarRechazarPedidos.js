import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inicio_comprador.css'
import {pedidos} from "Inicio_vendedor.js"

function AceptarRechazarPedidos () {}
    const [pedidos, setPedidos] = useState([]);


function aceptarPedido(idPedido) {
    // Realizar la petición HTTP para aceptar el pedido
    axios.put(`/BarrioCovid/pendientes/${idPedido}`, { estado: 'aceptado' })
      .then(response => {
        // Actualizar la lista de pedidos pendientes
        setPedidos(pedidos.filter(pedido => pedido.id !== idPedido));
      })
      .catch(error => {
        console.log(error);
      });
  }

  // Función para rechazar un pedido
  function rechazarPedido(idPedido) {
    axios.put(`/BarrioCovid/pendientes/${idPedido}`, { estado: 'rechazado' })
    .then(response => {
      // Actualizar la lista de pedidos pendientes
      setPedidos(pedidos.filter(pedido => pedido.id !== idPedido));
    })
    .catch(error => {
      console.log(error);
    });  
}

return (
    <div>
      <h1>Pedido</h1>
  
      <div className="container" style={{ display: "flex", flexDirection: "row" }}>
        <div className="column" style={{ flexBasis: "50%" }}>
          <h2>Pedidos pendientes:</h2>
          <ul>
            {pedidos.map((pedido) => (
              <li key={pedido.id}>
                <p>Comprador: {pedido.comprador}</p>
                <p>Productos:</p>
                <ul>
                  {pedido.productos.map((producto) => (
                    <li key={producto}>{producto}</li>
                  ))}
                </ul>
                <div>



export default AceptarRechazarPedidos;