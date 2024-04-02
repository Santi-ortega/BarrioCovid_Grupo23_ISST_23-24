import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inicio_comprador.css'

// Definición del componente Inicio_comprador
function Inicio_comprador() {
  const [tiendas, setTiendas] = useState([
    { id: 1, nombre: 'Charcutería Manolo', direccion: 'Guzmán el Bueno, 45', foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9O9onGL9CDkF7xBH4dYy4146rJbthkrVzgBJZH4Lcw&s", horario: '9:00-14:00'},
    { id: 2, nombre: 'Frutería claudia', direccion: 'Islas filipinas, 32', foto: "https://factoryfy.es/wp-content/uploads/FRUTERIA_CLAUDIA__2.jpg", horario: '10:00-18:00'},
    { id: 3, nombre: 'Supermercado Luisa', direccion: 'Donoso Cortés, 8', foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZsbG0WpHtETgaWfL__TCeDsep9rCJqvcwrsD6lmFCA&s", horario: '9:00-15:00'},
    { id: 4, nombre: 'Supermercado Alimerka', direccion: 'Avenida Complutense, 38', foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Alimerka_logo.svg/2560px-Alimerka_logo.svg.png", horario: '9:00-21:00'},
    { id: 5, nombre: 'Pescadería Gluglu', direccion: 'Andrés Mellado, 23', foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGDBueXveOIh00Gevw_nPSNeLdBCF7JSJd0U2eqD98SQ&s", horario: '12:00-20:00'},
  ]);

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/Productos/tienda/${id}`);
  };

  return (
    <div>
      <h2 className="selecciona-tienda">Seleccione su tienda:</h2>
      <ul>
        {tiendas.map((tienda) => (
          <li key={tienda.id} className='store'>
            <h2>{tienda.nombre}</h2>
            <img src={tienda.foto} alt={tienda.nombre} />
            <p>Dirección: {tienda.direccion}</p>
            <p>Horario: {tienda.horario}</p>
            <button onClick={() => handleClick(tienda.id)}>Comprar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Exportación del estado tiendas
export const tienda = [
  { id: 1, nombre: 'Charcutería Manolo', direccion: 'Guzmán el Bueno, 45', foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9O9onGL9CDkF7xBH4dYy4146rJbthkrVzgBJZH4Lcw&s", horario: '9:00-14:00'},
  { id: 2, nombre: 'Frutería claudia', direccion: 'Islas filipinas, 32', foto: "https://factoryfy.es/wp-content/uploads/FRUTERIA_CLAUDIA__2.jpg", horario: '10:00-18:00'},
  { id: 3, nombre: 'Supermercado Luisa', direccion: 'Donoso Cortés, 8', foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZsbG0WpHtETgaWfL__TCeDsep9rCJqvcwrsD6lmFCA&s", horario: '9:00-15:00'},
  { id: 4, nombre: 'Supermercado Alimerka', direccion: 'Avenida Complutense, 38', foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Alimerka_logo.svg/2560px-Alimerka_logo.svg.png", horario: '9:00-21:00'},
  { id: 5, nombre: 'Pescadería Gluglu', direccion: 'Andrés Mellado, 23', foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGDBueXveOIh00Gevw_nPSNeLdBCF7JSJd0U2eqD98SQ&s", horario: '12:00-20:00'},
];

export default Inicio_comprador;