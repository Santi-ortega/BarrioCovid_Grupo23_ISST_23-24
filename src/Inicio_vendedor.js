import React, { useState } from 'react';

function Inicio_vendedor() {
    const [pedido, setPedidos] = useState([
        { id: 1, nombre: 'pedido 1'},
        { id: 2, nombre: 'pedido 2'},
        { id: 3, nombre: 'pedido 3'},
        { id: 4, nombre: 'pedido 4'},
        { id: 5, nombre: 'pedido 5'},
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
            </li>
        ))}
      <h3>Pedido Nuevo</h3>
      <button onClick={handleInformacionPedido}>Información Pedido</button>
    </div>
  );
}

export default Inicio_vendedor;