import React from 'react';

function FileUploadButton() {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Aquí puedes hacer algo con el archivo seleccionado, como subirlo a un servidor
    console.log('Archivo seleccionado:', file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
}

export default FileUploadButton;