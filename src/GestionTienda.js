import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Productos.css';

function GestionTienda() {
    const [products, setProducts] = useState([]);
    const [editedProduct, setEditedProduct] = useState(null);
    const { idTienda, idVendedor } = useParams();
    const [newProduct, setNewProduct] = useState({
        nombre: '',
        descripcion: '',
        foto: '',
        precio: '',
        stock: ''
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
              const response = await axios.get(`http://localhost:8080/productos?idVendedor=${idVendedor}`);
              setProducts(response.data);
            } catch (error) {
                console.error('Error de red:', error);
            }
        };
        fetchProducts();
    }, [idTienda]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            const vendedorResponse = await axios.get(`http://localhost:8080/vendedor/${idVendedor}`);
            const vendedor = vendedorResponse.data;

            const data = {
                ...newProduct,
                vendedor: vendedor
            };

            const response = await axios.post('http://localhost:8080/productos', data);
            if (response.status === 201) {
                const updatedProducts = await axios.get(`http://localhost:8080/productos?idVendedor=${idVendedor}`);
                setProducts(updatedProducts.data);
                setNewProduct({
                    nombre: '',
                    descripcion: '',
                    foto: '',
                    precio: '',
                    stock: ''
                });
            }
        } catch (error) {
            console.error('Error al procesar la respuesta:', error);
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/productos/${id}`);
            const updatedProducts = products.filter(producto => producto.id !== id);
            setProducts(updatedProducts);
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    };

    return (
        <div>
            {/*<h1>{tiendasData.find(t => t.id === parseInt(idTienda))?.nombre}</h1>*/}
            <h2>Productos:</h2>
            <ul className='producto'>
            {Array.isArray(products) ? (
              products.map(producto => (
              <li key={producto.id}>
              <div>
              <img src={producto.foto} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p>Precio: {producto.precio}€</p>
              <p>Stock: {producto.stock}</p>
              <NavLink to={`/login_vendedor/Inicio_vendedor/${idVendedor}/edit/${producto.id}`}>
              <button>Editar</button>
              </NavLink>
              <button onClick={() => handleDeleteProduct(producto.id)}>Eliminar</button>
              </div>
              </li>
    ))
  ) : (
    <p>No se encontraron productos</p>
  )}
</ul>
            <form onSubmit={handleAddProduct}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" value={newProduct.nombre} onChange={handleInputChange} required />
                </div>
                <div>
                    <label htmlFor="description">Descripción:</label>
                    <input type="text" id="descripcion" name="descripcion" value={newProduct.descripcion} onChange={handleInputChange} required />
                </div>
                <div>
                    <label htmlFor="foto">Foto(URL):</label>
                    <input type="url" id="foto" name="foto" value={newProduct.foto} onChange={handleInputChange} required />
                </div>
                <div>
                    <label htmlFor="precio">Precio:</label>
                    <input type="number" id="precio" name="precio" value={newProduct.precio} onChange={handleInputChange} required />
                </div>
                <div>
                    <label htmlFor="stock">Stock:</label>
                    <input type="number" id="stock" name="stock" value={newProduct.stock} onChange={handleInputChange} required />
                </div>
                <button type="submit">Añadir Producto</button>
            </form>
        </div>
    );
}

export default GestionTienda;
