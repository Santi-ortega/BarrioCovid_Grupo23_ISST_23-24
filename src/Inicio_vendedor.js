import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inicio_vendedor.css'

function Inicio_vendedor() {
    const [pedidos, setPedidos] = useState([
        { id: 1, nombre: 'pedido 1', hora_realizada: "18:00", hora_recogida: "20:00"},
        { id: 2, nombre: 'pedido 2', hora_realizada: "18:00", hora_recogida: "20:00"},
        { id: 3, nombre: 'pedido 3', hora_realizada: "18:00", hora_recogida: "20:00"},
        { id: 4, nombre: 'pedido 4', hora_realizada: "18:00", hora_recogida: "20:00"},
        { id: 5, nombre: 'pedido 5', hora_realizada: "18:00", hora_recogida: "20:00"},
      ]);
    
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/AceptarRechazarPedidos/pedido/${id}`);
  };

  return (
    <div className="inicio-vendedor-container">
       <h1>Tus Pedidos</h1>
      <div className="store">
         {pedidos.map((pedido) => (
          <li key={pedido.id} className="store">
            <h3>Tienes un nuevo pedido!</h3>
          <button onClick={() => handleClick(pedido.id)}>Información Pedido</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export const pedido = [
  { id: 1, nombre: 'pedido 1', fecha_realizada: "Fecha de realización: 18:00", fecha_recogida: "Fecha de recogida: 20:00"},
  { id: 2, nombre: 'pedido 2', fecha_realizada: "Fecha de realización: 18:00", fecha_recogida: "Fecha de recogida:: 20:00"},
  { id: 3, nombre: 'pedido 3', fecha_realizada: "Fecha de realización: 18:00", fecha_recogida: "Fecha de recogida: 20:00"},
  { id: 4, nombre: 'pedido 4', fecha_realizada: "Fecha de realización: 18:00", fecha_recogida: "Fecha de recogida: 20:00"},
  { id: 5, nombre: 'pedido 5', fecha_realizada: "Fecha de realización: 18:00", fecha_recogida: "Fecha de recogida: 20:00"},
];

export default Inicio_vendedor;