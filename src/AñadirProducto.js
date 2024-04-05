import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Inicio_comprador.css';

const AñadirProducto = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const{idTienda} = useParams();

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
    <form onSubmit={handleSubmit}>
      <input className='store li'
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AñadirProducto;