import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Inicio_vendedor.css'
import './Inicio_comprador.css'
import axios from 'axios';
import { pedidosData } from "./Inicio_vendedor.js"
import { tiendasData } from './Inicio_comprador.js';

function AceptarRechazarPedidos () {
const [productos, setProductos] = useState([
        { id: 1, idTienda: 1, nombre: "Lomo", idPedido: 1, precio: '10', foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF08GU6Mf9Kz6m5rFMG6gATiYKbTqQLO3sOP0PztQ5QQ&s"},
        { id: 2, idTienda: 1, nombre: "Chorizo", idPedido: 1, precio: '5', foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgSTjY9gplXLJO4s6V8YOQemL9mv3Vl4iAu9vR_4EMg&s"},
        {id: 3, idTienda: 1, nombre: "Fuet", idPedido: 1, precio: '5', foto: "https://images.openfoodfacts.org/images/products/848/000/055/1085/front_en.61.400.jpg"},
        {id: 1, idTienda: 2, nombre: "Uvas", idPedido: 2, precio: '1.2', foto: "https://phantom-elmundo.unidadeditorial.es/3ce4cca00caea1a116a24f4a20eab6e5/crop/0x55/699x520/resize/414/f/jpg/assets/multimedia/imagenes/2019/12/19/15767544243662.jpg"},
        {id: 2, idTienda: 2, nombre: "Fresas", idPedido: 2, precio: '2', foto: "https://dialprix.es/blog/wp-content/uploads/fresas.jpg"},
        {id: 3, idTienda: 2, nombre: "Mandarina", idPedido: 2, precio: '1', foto: "https://mon.es/wp-content/uploads/2018/11/Mandarina.png"},
        {id: 1, idTienda: 3, nombre: "Whisky DYC 8", idPedido: 3, precio: '1,2', foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCMbg6zj291oooOk9eetJRChieP9lq9pkDPmOHA1XQw&s"},
        {id: 2, idTienda: 3, nombre: "Pan Bimbo", idPedido: 3, precio: '2', foto: "https://static.carrefour.es/hd_510x_/img_pim_food/848048_00_1.jpg"},
        {id: 3, idTienda: 3, nombre: "Natillas", idPedido: 3, precio: '8', foto: "https://media.ocu.org/images/E7A09E006EF8A153914F34F72A94E32127C5A4E1/w600-c4/Natillas-HACENDADO-MERCADONA-NATILLAS-SABOR-VAINILLA.jpg"},
        {id: 1, idTienda: 4, nombre: "Cerveza", idPedido: 4, precio: '2', foto:  "https://www.frutaspablosonline.es/wp-content/uploads/2023/07/F5617CC5-E0F8-4AC0-BFF9-C4ECF1980FD1.jpeg"},
        {id: 2, idTienda: 4, nombre: "Cocacola", idPedido: 4, precio: '2', foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg/800px-15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg"},
        {id: 3, idTienda: 4, nombre: "Té rojo", idPedido: 4, precio: '1,2', foto: "https://www.pompadour.es/1487/te-rojo-con-fresas.jpg"},
        {id: 1, idTienda: 5, nombre: "Gambas", idPedido: 5, precio: '2', foto: "https://images.ecestaticos.com/PRK73ius13FYLG6IcBpITLB0QkA=/0x108:2118x1301/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F267%2Fadb%2Fc3e%2F267adbc3ea491937a2c306806988b9b9.jpg"},
        {id: 2, idTienda: 5, nombre: "Salmón", idPedido: 5, precio: '1', foto: "https://opercebeiro.com/wp-content/uploads/nc/catalog/rodaja-salmon-opercebeiro-800x800.png"},
        {id: 3, idTienda: 5, nombre: "Lubina", idPedido: 5, precio: '8', foto: "https://mariscodeislacristina.com/wp-content/uploads/2021/12/lubina-salvaje-1.jpg"},
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
            <div className= "store">
          <div key={producto.id} className="store">
            <img className="imagen-pequeña" src={producto.foto} alt={producto.nombre} />
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