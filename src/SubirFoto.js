import React, { useState } from 'react';

//Función para poder subir una foto a la base de datos
const SubirFoto = ({ onImageChange }) => {
  const [file, setFile] = useState(null);

  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
    onImageChange(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
    </div>
  );
};

export default SubirFoto;