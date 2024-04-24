import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Inicio_vendedor.css';
import axios from 'axios';

function Inicio_voluntario() {
  const [pedidos, setPedidos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Función para obtener los pedidos de los compradores vulnerables
    const fetchPedidos = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/comprador/vulnerable/Si`);
        setPedidos(response.data);
      } catch (error) {
        console.error('Error al obtener los pedidos de los compradores vulnerables:', error);
      }
    };

    fetchPedidos();
  }, []);

  // Función para manejar el clic en un pedido
  const handleClick = (id) => {
    navigate(`/AceptarRechazarPedidos/pedido/${id}`);
  };

  return (
    <div className="inicio-voluntario-container">
      <h1>Pedidos de Compradores Vulnerables</h1>
      <div className="pedido">
        {/* Mapeamos todos los pedidos de los compradores vulnerables */}
        {pedidos.map((pedido) => (
          <li key={pedido.id} className="pedido">
            <h3>Tienes un nuevo pedido de un comprador vulnerable!</h3>
            <button onClick={() => handleClick(pedido.id)}>Información Pedido</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Inicio_voluntario;