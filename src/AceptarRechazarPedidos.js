import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Inicio_vendedor.css'
import axios from 'axios';
import { pedido } from "./Inicio_vendedor.js"
import { tienda } from './Inicio_comprador.js';

function AceptarRechazarPedidos () {
const [productos, setProductos] = useState([
        { id: 1, idTienda: 1, nombre: "Television", idPedido: 1, precio: '500'},
        { id: 2, idTienda: 1, nombre: "Coche", idPedido: 1, precio: '280000'},
]);     

const {idPedido} = useParams();
const [idVendedor, setIdVendedor]= useState()
const [nombre, setNombre] = useState('');
const [precio, setPrecio] = useState('');
const [nombreProducto, setNombreProducto] = useState('');

useEffect(() => {
    // Filtrar los productos por el ID del pedido
    const productosFiltrados = productos.filter(producto => producto.idPedido === parseInt(idPedido));
    setProductos(productosFiltrados);
  }, [idPedido, productos])

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/login_vendedor/Inicio_vendedor`);
  };

  return (
    <div>
      <h1>Información del pedido</h1>
      {productos.map((producto, index) => {
        // Filtrar los pedidos que corresponden al producto actual
        const pedidosProducto = pedido.filter((p) => p.id === producto.idPedido);
        // Obtener la primera fecha de realización y recogida del grupo de pedidos
        const fechaRealizada =
          pedidosProducto.length > 0 ? pedidosProducto[0].fecha_realizada : "";
        const fechaRecogida =
          pedidosProducto.length > 0 ? pedidosProducto[0].fecha_recogida : "";

        return (
            <div className= "pedido">
          <div key={producto.id} className="pedido">
            <h3>{producto.nombre}</h3>
            <h4>{producto.precio}€</h4>
            {index === productos.length-1 && (
            <ul>
              <li>
                <p>{fechaRealizada}</p>
                <p>{fechaRecogida}</p>
              </li>
            </ul>
            )}
           {index === productos.length - 1 && (
              <>
                <button onClick={() => handleClick(pedidosProducto[0].id)}>
                  Aceptar
                </button>
                <button onClick={() => handleClick(pedidosProducto[0].id)}>
                  Rechazar
                </button>
              </>
            )}
          </div>
          </div>
        );
      })}
    </div>
  );
}
  export default AceptarRechazarPedidos;