// import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
function AceptarRechazarPedidos() {
  const { idPedido } = useParams();
  const [pedido, setPedido] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPedido = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/pedidos/${idPedido}`);
        setPedido(response.data);
      } catch (error) {
        console.error('Error al obtener el pedido:', error);
      }
    };

    fetchPedido();
  }, [idPedido]);

  const handleAceptar = async () => {
    // Lógica para aceptar el pedido
  };

  const handleRechazar = async () => {
    // Lógica para rechazar el pedido
  };

  return (
    <div>
      <h1>Detalles del Pedido</h1>
      {pedido ? (
        <div>
          <h3>ID del Pedido: {pedido.id}</h3>
          <h3>Hora de Recogida: {pedido.horaRecogida}:00 horas</h3>
        <h3>Descripción: {pedido.descripcion}</h3>
          <button onClick={handleAceptar}>Aceptar</button>
          <button onClick={handleRechazar}>Rechazar</button>
        </div>
      ) : (
        <p>Cargando detalles del pedido...</p>
      )}
    </div>
  );
}

export default AceptarRechazarPedidos;