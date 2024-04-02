import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { tienda } from './Inicio_comprador.js'
import './Productos.css';


function Productos() {
  const [products, setProducts] = useState([]);
  const { idTienda } = useParams();

  const productos = [ 
  { id: 1, idTienda: 1 , nombre: 'Carne', description: 'Descripción del producto 1', foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9O9onGL9CDkF7xBH4dYy4146rJbthkrVzgBJZH4Lcw&s", precio: '10'},
  { id: 2, idTienda: 1 , nombre: 'Pescado', description: 'Descripción del producto 2', foto: "https://factoryfy.es/wp-content/uploads/FRUTERIA_CLAUDIA__2.jpg", precio: '5'},
  { id: 3, idTienda: 1 , nombre: 'Fruta', description: 'Descripción del producto 3', foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZsbG0WpHtETgaWfL__TCeDsep9rCJqvcwrsD6lmFCA&s", precio: '6'},
  { id: 4, idTienda: 1 , nombre: 'Verdura', description: 'Descripción del producto 4', foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Alimerka_logo.svg/2560px-Alimerka_logo.svg.png", precio: '8'},
];
  const location = useLocation();
  //const tiendaId = new URLSearchParams(location.search).get('tienda');

  useEffect(() => {
    // Filtrar los productos por el ID de la tienda
    const productosFiltrados = productos.filter(producto => producto.idTienda === parseInt(idTienda));
    setProducts(productosFiltrados);
  }, [idTienda, products]);

  const handleAddToCart = (product) => {
    // implementar lógica para añadir el producto al carrito del comprador
  };

  return (
    <div>
      <h1>{tienda.find(tienda => tienda.id === id)?.nombre}</h1>
      <h2>Productos:</h2>
      {products.map((producto) => (
        <div key={producto.id} className='store' >
          <h3>{producto.nombre}</h3>
          <img src={producto.foto} alt={producto.nombre} />
          <p>{producto.description}</p>
          <p>Precio: {producto.precio}€</p>
          <button onClick={() => handleAddToCart(producto)}>Añadir al Carrito</button>
        </div>
      ))}
    </div>
  );
};

export default Productos;
