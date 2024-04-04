import React, { useState } from 'react';

function Inicio_vendedor() {
    const [pedido, setPedidos] = useState([
        { id: 1, nombre: 'tienes un nuevo pedido'},
        { id: 2, nombre: 'tienes un nuevo pedido'},
        { id: 3, nombre: 'tienes un nuevo pedido'},
        { id: 4, nombre: 'tienes un nuevo pedido'},
        { id: 5, nombre: 'tienes un nuevo pedido'},
      ]);


  const handleInformacionPedido = () => {
    // Lógica para manejar la información del pedido
    console.log('Información del pedido');
  };

  return (
    <div className="inicio-vendedor-container">
         {pedido.map((pedido) => (
          <li key={pedido.id}>
            <h2>{pedido.nombre}</h2>
            <button onClick={handleInformacionPedido}>Información Pedido</button>
            </li>
        ))}
      
    </div>
  );
}

export default Inicio_vendedor;