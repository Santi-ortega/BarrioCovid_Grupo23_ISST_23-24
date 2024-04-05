import React, { useState } from 'react';

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