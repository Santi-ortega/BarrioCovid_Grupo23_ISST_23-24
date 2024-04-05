import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { tienda } from './Inicio_comprador.js';
import './Productos.css';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';

function Productos() {
  const [products, setProducts] = useState([
  { id: 1, idTienda: 1 , nombre: 'Lomo', description: 'Lomo ibérico', foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF08GU6Mf9Kz6m5rFMG6gATiYKbTqQLO3sOP0PztQ5QQ&s", precio: '10'},
  { id: 2, idTienda: 1 , nombre: 'Chorizo', description: 'Chorizo de cantimpalo', foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgSTjY9gplXLJO4s6V8YOQemL9mv3Vl4iAu9vR_4EMg&s", precio: '5'},
  { id: 3, idTienda: 1 , nombre: 'Fuet', description: 'Fuet CasaTarradellas', foto: "https://images.openfoodfacts.org/images/products/848/000/055/1085/front_en.61.400.jpg", precio: '6'},
  { id: 4, idTienda: 1 , nombre: 'Salchichón', description: 'Salchichon ElPozo', foto: "https://images.openfoodfacts.org/images/products/848/000/059/1302/front_es.3.full.jpg", precio: '8'}, { id: 1, idTienda: 2 , nombre: 'Manzana', description: 'Manzana verde', foto: "https://delahuertacasa.com/wp-content/uploads/2022/01/manzana-verde-product.jpg", precio: '1,2'},
  { id: 2, idTienda: 2 , nombre: 'Fresas', description: 'Fresones de huelva', foto: "https://dialprix.es/blog/wp-content/uploads/fresas.jpg", precio: '2'},
  { id: 3, idTienda: 2 , nombre: 'Mandarina', description: 'Mandarina española', foto: "https://mon.es/wp-content/uploads/2018/11/Mandarina.png", precio: '1'},
  { id: 4, idTienda: 2 , nombre: 'Uvas', description: 'Uvas frescas de temporada', foto: "https://phantom-elmundo.unidadeditorial.es/3ce4cca00caea1a116a24f4a20eab6e5/crop/0x55/699x520/resize/414/f/jpg/assets/multimedia/imagenes/2019/12/19/15767544243662.jpg", precio: '8'},
  { id: 1, idTienda: 3 , nombre: 'Pan Bimbo', description: 'Pan Bimbo', foto: "https://static.carrefour.es/hd_510x_/img_pim_food/848048_00_1.jpg", precio: '1,2'},
  { id: 2, idTienda: 3 , nombre: 'Whisky dyc 8', description: 'Whisky nacional', foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCMbg6zj291oooOk9eetJRChieP9lq9pkDPmOHA1XQw&s", precio: '2'},
  { id: 3, idTienda: 3 , nombre: 'Yogures', description: 'Yogurt natural', foto: "https://www.supermercadosmas.com/media/catalog/product/a/e/aecoc_08480012020753_08480012020753_c1l1.jpg", precio: '1'},
  { id: 4, idTienda: 3 , nombre: 'Natillas', description: 'Natillas Hacendado', foto: "https://media.ocu.org/images/E7A09E006EF8A153914F34F72A94E32127C5A4E1/w600-c4/Natillas-HACENDADO-MERCADONA-NATILLAS-SABOR-VAINILLA.jpg", precio: '8'},
  { id: 1, idTienda: 4,  nombre: 'Te', description: 'Te rojo', foto: "https://www.pompadour.es/1487/te-rojo-con-fresas.jpg", precio: '1,2'},
  { id: 2, idTienda: 4 , nombre: 'Cerveza', description: 'Mahou roja', foto: "https://www.frutaspablosonline.es/wp-content/uploads/2023/07/F5617CC5-E0F8-4AC0-BFF9-C4ECF1980FD1.jpeg", precio: '2'},
  { id: 3, idTienda: 4 , nombre: 'CocaCola', description: 'CocaCola sin azúcar', foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg/800px-15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg", precio: '1'},
  { id: 4, idTienda: 4 , nombre: 'Pan', description: 'barra tornillo', foto: "https://migabakeryadomicilio.com/wp-content/uploads/2020/03/Tornillo.jpg", precio: '8'},
  { id: 1, idTienda: 5 , nombre: 'Lenguado', description: 'Lenguado fresco', foto: "https://s3.ppllstatics.com/eldiariomontanes/www/multimedia/202102/20/media/cortadas/62318145-kWEH-U130585846198jfF-1248x770@Diario%20Montanes.jpg", precio: '1,2'},
  { id: 2, idTienda: 5 , nombre: 'Gambas', description: 'Gambas del norte', foto: "https://images.ecestaticos.com/PRK73ius13FYLG6IcBpITLB0QkA=/0x108:2118x1301/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F267%2Fadb%2Fc3e%2F267adbc3ea491937a2c306806988b9b9.jpg", precio: '2'},
  { id: 3, idTienda: 5 , nombre: 'Salmón', description: 'Salmón nacional', foto: "https://opercebeiro.com/wp-content/uploads/nc/catalog/rodaja-salmon-opercebeiro-800x800.png", precio: '1'},
  { id: 4, idTienda: 5 , nombre: 'Lubina', description: 'Lubina deluxe', foto: "https://mariscodeislacristina.com/wp-content/uploads/2021/12/lubina-salvaje-1.jpg", precio: '8'},
]);
  
  const { idTienda } = useParams();
  const [quantities, setQuantities] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const { addToCart } = useCart();
  
  useEffect(() => {
    // Filtrar los productos por el ID de la tienda
    const productosFiltrados = products.filter(producto => producto.idTienda === parseInt(idTienda));
    setProducts(productosFiltrados);
  }, [idTienda, products]);

  const handleAddToCart = (product , quantity) => {
    addToCart(product);
  };   

  return (
    <div>
      <h1>{tienda.find(tienda => tienda.id === parseInt(idTienda))?.nombre}</h1>
      <h2>Productos:</h2>
      <Link to="/Carrito">
        <button className='botonCarrito'> <FontAwesomeIcon icon={faShoppingCart}/>
        </button>
      </Link>
      <ul className='producto'>
      {products.map((producto) => (
        <li key={producto.id} className='producto' >
          <h3>{producto.nombre}</h3>
          <img src={producto.foto} alt={producto.nombre} />
          <p>{producto.description}</p>
          <p>Precio: {producto.precio}€</p>
          <button onClick={() => handleAddToCart(producto)}>Añadir al Carrito</button>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Productos;
