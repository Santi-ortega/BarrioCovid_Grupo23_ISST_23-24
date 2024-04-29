import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './Inicio_comprador.css';

const AñadirProducto = ({ onAddProduct }) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const { idTienda } = useParams();
  const formData = useRef(new FormData());
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);
    setImage(selectedFile);
    formData.current.set("image", selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!image) {
      alert('Please select an image');
      return;
    }

    const imageUrl = URL.createObjectURL(image);
    
    const newProduct = {
      id: Date.now(),
      idTienda: parseInt(idTienda),
      nombre: name,
      description: description,
      foto: imageUrl, // Pass the image directly
      precio: price,
    };
    
    onAddProduct(newProduct);
    setName('');
    setDescription('');
    setPrice('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='store li'
        type="text"
        placeholder="Nombre producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        placeholder="Imágen"
        type="file"
        accept=".jpg,.jpeg,.png"
        ref={fileInputRef}
        onChange={handleImageChange}
        required
      />
      <button type="submit">Añadir Producto</button>
    </form>
  );
};

export default AñadirProducto;