import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import './PantallaPago.css';

//Esta es la pantalla de pago del comprasor
function PantallaPago() {

  const [hour, setHour] = useState(0);
  const [comprador, setComprador] = useState({});
  const location = useLocation();
  const { idVendedor, idComprador } = useParams();
  const cartData = location.state?.cartData || [];

  useEffect(() => {
    // Función para obtener el objeto del comprador
    const fetchComprador = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/comprador/${idComprador}`);
        setComprador(response.data);
      } catch (error) {
        console.error('Error al obtener el comprador:', error);
      }
    };
    fetchComprador();
  }, [idComprador]);

    //Función para enviar el proceso de pago
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const descripcion = cartData.map(item => `${item.name}: ${item.quantity}`).join(', ');
    
        const data = {
          vendedorId: idVendedor,
          comprador,
          horaRecogida: hour,
          descripcion: descripcion
        };
    
        console.log(data); // Imprime los datos antes de serializarlos
    
        const jsonData = JSON.stringify(data); // Serializar el objeto data a JSON
    
        const response = await axios.post('http://localhost:8080/pedidos', jsonData, {
          headers: {
            'Content-Type': 'application/json' // Especificar el tipo de contenido como JSON
          }
        });
    
        if (response.status === 201) {
          console.log('Pedido enviado con éxito');
          alert(`Pedido realizado con éxito. IMPORTANTE! ID del pedido: ${response.data.id}, lo necesitará para recoger el pedido`); // Muestra una alerta con el ID del pedido
          // Aquí podrías redirigir a una página de confirmación o realizar otras acciones
        } else {
          console.error('Error al enviar el pedido');
          // Manejar el error en caso de que la solicitud no sea exitosa
        }
      } catch (error) {
        console.error('Error al enviar el pedido:', error);
        // Manejar errores de red u otros errores
      }
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Formulario para los detalles del pago */}
        <div style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
        <h2 style={{ marginBottom: '20px' }}>Resumen del pedido</h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
        {cartData.map((item, index) => (
        <li key={index} style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>{item.name}</span>: {item.quantity}
        </li>
        ))}
        </ul>
      </div>
        <div>
          <label>Hora Recogida:</label>
          <select value={hour} onChange={(e) => setHour(parseInt(e.target.value))}>
            {[...Array(24).keys()].map((hour) => (
              <option key={hour + 1} value={hour + 1}>
                {hour + 1}:00
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Aceptar</button>
      </form>
    </div>
  );
}

export default PantallaPago;