import React from 'react';

const BackButton = () => {
    const goBack = () => {
        window.history.back(); // Vuelve atrás en la historia del navegador
    };
  
    return (
        <button onClick={goBack} style={{ position: 'fixed', bottom: '10px', left: '10px' }}>
            Volver
        </button>
    );
  };
  export default BackButton;