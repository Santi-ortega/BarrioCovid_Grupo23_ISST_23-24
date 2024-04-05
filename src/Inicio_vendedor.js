import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inicio_vendedor.css'

//Esta es la primera pantalla que ve el vendedor para ver si tiene pedidos pendientes

function Inicio_vendedor() {

  //Simulación de los pedidos que le llegarían al vendedor
  const [pedidos, setPedidos] = useState([
      { id: 1, nombre: 'pedido 1', hora_realizada: "18:00", hora_recogida: "20:00"},
      { id: 2, nombre: 'pedido 2', hora_realizada: "18:00", hora_recogida: "20:00"},
      { id: 3, nombre: 'pedido 3', hora_realizada: "18:00", hora_recogida: "20:00"},
      { id: 4, nombre: 'pedido 4', hora_realizada: "18:00", hora_recogida: "20:00"},
      { id: 5, nombre: 'pedido 5', hora_realizada: "18:00", hora_recogida: "20:00"},
    ]);
   
  //Parámetro para navegar entre pantallas
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/AceptarRechazarPedidos/pedido/${id}`);
  };

  //Renderizamos la pantalla Inicio_vendedor
  return (
    <div className="inicio-vendedor-container">
       <h1>Tus Pedidos</h1>
      <div className="pedido">
        {/*Mapeamos todos los pedidos que tiene pendientes el vendedor*/}
         {pedidos.map((pedido) => (
          <li key={pedido.id} className="pedido">
            <h3>Tienes un nuevo pedido!</h3>
          <button onClick={() => handleClick(pedido.id)}>Información Pedido</button> {/*Botón para ver la info del pedido*/}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Inicio_vendedor;