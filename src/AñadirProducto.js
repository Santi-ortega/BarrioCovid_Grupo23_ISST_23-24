import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SubirFoto from './SubirFoto';

const AñadirProducto = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleFileUpload = (file) => {
    setImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      // You can send the image to your server here
      // ...

      // After the image is saved, create a new product object
      const newProduct = {
        name,
        description,
        price,
        foto: URL.createObjectURL(image),
      };

      onAddProduct(newProduct);

      // Reset the form fields
      setName("");
      setDescription("");
      setPrice("");
      setImage(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Product description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        type="text"
        placeholder="Product price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <SubirFoto onChange={handleFileUpload} />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AñadirProducto;
