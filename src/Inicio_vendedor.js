import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import './Inicio_vendedor.css';
import axios from 'axios';

function Inicio_vendedor() {
  const [pedidos, setPedidos] = useState([]);
  const { idVendedor } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Función para obtener los pedidos del vendedor
    const fetchPedidos = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/pedidos/vendedor/${idVendedor}`);
        setPedidos(response.data);
      } catch (error) {
        console.error('Error al obtener los pedidos del vendedor:', error);
      }
    };
    fetchPedidos();
  }, [idVendedor]);

  // Función para manejar el clic en un pedido
  const handleClick = (id) => {
    navigate(`/AceptarRechazarPedidos/pedido/${id}`);
  };

  return (
    <div className="inicio-vendedor-container">
      <h1>Tus Pedidos</h1>
      <div className="pedido">
        {/* Mapeamos todos los pedidos que tiene pendientes el vendedor */}
        {pedidos.map((pedido) => (
          <li key={pedido.id} className="pedido">
            <h3>Tienes un nuevo pedido!</h3>
            <button onClick={() => handleClick(pedido.id)}>Información Pedido</button>
          </li>
        ))}
      </div>
      <div className="store">
        <Link to={`/login_vendedor/Inicio_vendedor/${idVendedor}/GestionTienda`}>
          <button className="gestión">Gestionar Tienda</button>
        </Link>
      </div>
    </div>
  );
}

export default Inicio_vendedor;
