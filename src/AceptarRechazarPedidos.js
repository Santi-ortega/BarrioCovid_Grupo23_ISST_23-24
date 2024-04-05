import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Inicio_vendedor.css'
import axios from 'axios';
import { pedidosData } from "./Inicio_vendedor.js"
import { tiendasData } from './Inicio_comprador.js';

function AceptarRechazarPedidos () {
const [productos, setProductos] = useState([
        { id: 1, idTienda: 1, nombre: "Lomo", idPedido: 1, precio: '10'},
        { id: 2, idTienda: 1, nombre: "chorizo", idPedido: 1, precio: '5'},
        {id: 3, idTienda: 1, nombre: "Fuet", idPedido: 1, precio: '5'},
        {id: 1, idTienda: 2, nombre: "Manzana", idPedido: 2, precio: '1.2'},
        {id: 2, idTienda: 2, nombre: "Fresas", idPedido: 2, precio: '2'},
        {id: 3, idTienda: 2, nombre: "Mandarina", idPedido: 2, precio: '1'},
        {id: 1, idTienda: 3, nombre: "Whisky dyc 8", idPedido: 3, precio: '1,2'},
        {id: 2, idTienda: 3, nombre: "Pan bimbo", idPedido: 3, precio: '2'},
        {id: 3, idTienda: 3, nombre: "Natillas", idPedido: 3, precio: '8'},
        {id: 1, idTienda: 4, nombre: "cerveza", idPedido: 4, precio: '2'},
        {id: 2, idTienda: 4, nombre: "Cocacola", idPedido: 4, precio: '2'},
        {id: 3, idTienda: 4, nombre: "Te rojo", idPedido: 4, precio: '1,2'},
        {id: 1, idTienda: 5, nombre: "Gambas", idPedido: 5, precio: '2'},
        {id: 2, idTienda: 5, nombre: "Salmon", idPedido: 5, precio: '1'},
        {id: 3, idTienda: 5, nombre: "Lubina", idPedido: 5, precio: '8'},
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
        const pedidosProducto = pedidosData.filter((p) => p.id === producto.idPedido);
        // Obtener la primera fecha de realización y recogida del grupo de pedidos
        const fechaRealizada =
          pedidosProducto.length > 0 ? pedidosProducto[0].hora_realizada: "";
        const fechaRecogida =
          pedidosProducto.length > 0 ? pedidosProducto[0].hora_recogida: "";

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