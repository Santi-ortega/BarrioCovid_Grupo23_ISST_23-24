import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inicio_comprador.css'

// Primera pantalla que ve el comprador tras loguearse
  //Simulación de las tiendas a las que tiene acceso el comprador  
  const tiendasData = [
    { id: 1, nombre: 'Charcutería Manolo', direccion: 'Guzmán el Bueno, 45', foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9O9onGL9CDkF7xBH4dYy4146rJbthkrVzgBJZH4Lcw&s", horario: '9:00-14:00'},
    { id: 2, nombre: 'Frutería Claudia', direccion: 'Islas filipinas, 32', foto: "https://factoryfy.es/wp-content/uploads/FRUTERIA_CLAUDIA__2.jpg", horario: '10:00-18:00'},
    { id: 3, nombre: 'Supermercado Luisa', direccion: 'Donoso Cortés, 8', foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZsbG0WpHtETgaWfL__TCeDsep9rCJqvcwrsD6lmFCA&s", horario: '9:00-15:00'},
    { id: 4, nombre: 'Supermercado Alimerka', direccion: 'Avenida Complutense, 38', foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Alimerka_logo.svg/2560px-Alimerka_logo.svg.png", horario: '9:00-21:00'},
    { id: 5, nombre: 'Pescadería Gluglu', direccion: 'Andrés Mellado, 23', foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGDBueXveOIh00Gevw_nPSNeLdBCF7JSJd0U2eqD98SQ&s", horario: '12:00-20:00'},
  ];
    function Inicio_comprador() {
    const [tiendas, setPedidos] = useState(tiendasData); 
    
  //Creamos un parámetro para navegar a la pantalla de cada tienda
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/Productos/tienda/${id}`);
  };

  //Renderizamos la pantalla donde se ven todas las tiendas disponibles en la aplicación
  return (
    <div>
      <h2 className="selecciona-tienda">Seleccione su tienda:</h2>
      <ul className='store'>
        {/*Mapeamos todas las tiendas*/}
        {tiendas.map((tienda) => (
          <li key={tienda.id}>
            <h2>{tienda.nombre}</h2> {/*Nombre de la tienda*/}
            <img src={tienda.foto} alt={tienda.nombre} /> {/*Foto de la tienda*/}
            <p>Dirección: {tienda.direccion}</p> {/*Dirección de la tienda*/}
            <p>Horario: {tienda.horario}</p> {/*Horario de la tienda*/}
            <button onClick={() => handleClick(tienda.id)}>Comprar</button> {/*Botón para entrar a ver los productos de cada tienda*/}
          </li>
        ))}
      </ul>
    </div>
  );
}
export {tiendasData};

export default Inicio_comprador;