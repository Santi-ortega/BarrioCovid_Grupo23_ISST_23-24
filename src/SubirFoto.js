import React, { useState } from 'react';

//Función para poder subir una foto a la base de datos
const SubirFoto = ({ onImageChange }) => {
  const [file, setFile] = useState(null);

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    } else {
      console.error("No se seleccionó ningún archivo.");
    }
  };

  return (
    <div>
      <SubirFoto onImageChange={handleFileInputChange} />
    </div>
  );

};

export default SubirFoto;