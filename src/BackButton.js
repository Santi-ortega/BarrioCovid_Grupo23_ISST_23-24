import React from 'react';
import './Inicio_comprador.css';

const BackButton = () => {
    const goBack = () => {
        window.history.back(); // Vuelve atrás en la historia del navegador
    };
  
    return (
        <div className='store'>
        <button onClick={goBack} style={{ position: 'fixed', bottom: '10px', left: '10px' }}>
            Volver
        </button>
        </div>
        
    );
  };
  export default BackButton;