import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Inicio_comprador.css';

function Inicio_comprador() {
  const [vendedores, setVendedores] = useState([]); 
  const { idComprador } = useParams(); // Obtener el ID del comprador de la URL
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVendedores = async () => {
      try {
        const response = await axios.get('http://localhost:8080/vendedor');
        setVendedores(response.data);
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    fetchVendedores();
  }, []);

  const handleClick = (idVendedor) => {
    navigate(`/Productos/tienda/${idComprador}/${idVendedor}`);
  };
  

  return (
    <div>
      <h2 className="selecciona-tienda">Seleccione su tienda:</h2>
      <ul className='store'>
        {vendedores.map((vendedor) => (
          <li key={vendedor.id}>
            <h2>{vendedor.tienda}</h2> {/*Nombre de la tienda*/}
            <img src={vendedor.imagen} alt={vendedor.nombre} /> {/*Foto de la tienda*/}
            <p>Dirección: {vendedor.direccion}</p> {/*Dirección del vendedor*/}
            <p>Horario: {vendedor.horario}</p> {/*Horario de la tienda*/}
            <button onClick={() => handleClick(vendedor.id)}>Comprar</button> {/*Botón para entrar a ver los productos del vendedor*/}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inicio_comprador;
