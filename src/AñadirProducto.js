import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Inicio_comprador.css';

//Esta pantalla permite a los vendedores añadir productos a su tienda
const AñadirProducto = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const{idTienda} = useParams();

  //Controlar el submit para que aparezca el producto al clicar añadir producto
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      idTienda: parseInt(idTienda),
      nombre: name,
      description: description,
      foto: image,
      precio: price,
    };
    onAddProduct(newProduct);
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
  };

  return (
    //Creamos un form para añadir todos los parametros que se necesitan para cada producto
    <form onSubmit={handleSubmit}>
      <input className='store li'
        type="text"
        placeholder="Nombre producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Imágen"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AñadirProducto;