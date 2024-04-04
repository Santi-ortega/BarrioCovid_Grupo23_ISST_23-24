import logo from './logo.svg';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portada from './portada';
import Registro_Comprador from "./registro_comprador";
import Login_comprador from './login_comprador';
import Registro_Vendedor from "./registro_vendedor";
import Registro_Voluntario from "./registro_voluntario";
import Inicio_comprador from './Inicio_comprador';
import Inicio_vendedor from './Inicio_vendedor';
import BackButton from './BackButton';
import Productos from './Productos';
import Carrito from './Carrito';
import PantallaPago from './PantallaPago';
import { CartProvider } from './CartContext';
import Login_vendedor from './login_vendedor';

  function App() {
    const [loading, setLoading] = useState(true);
    const { idVendedor } = useParams();
    const { idVoluntario } = useParams();
    const { idTienda } = useParams();
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
      async function fetchData() {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
  
      fetchData();
    }, [idVendedor, idVoluntario, idTienda]);

  return (
    <div className="App">
      <header>
        BarrioCovid
        <img src="BC.jpg" className="logo" />
        <BackButton className="atras"/>
      </header>
      <br/>
        <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Portada />} />
            <Route path="/registro_comprador" element={<Registro_Comprador />} />
            <Route path="/login_comprador" element={<Login_comprador />} />
            <Route path="/login_vendedor" element={<Login_vendedor />} />
            <Route path="/registro_vendedor" element={<Registro_Vendedor />} />
            <Route path="/registro_voluntario" element={<Registro_Voluntario />} />
            <Route path="/login_comprador/Inicio_comprador" element={<Inicio_comprador/>} />
            <Route path="/login_vendedor/Inicio_vendedor" element={<Inicio_vendedor/>} />
            <Route path="/Productos/tienda/:idTienda" element={<Productos />} />
            <Route path="/carrito" element={<Carrito cartItems={cartItems} />} />
            <Route path="/PantallaPago" element={<PantallaPago />} />
          </Routes>
          </CartProvider>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
