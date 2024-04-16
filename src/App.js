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
import AceptarRechazarPedidos from "./AceptarRechazarPedidos"
import GestionTienda from "./GestionTienda"
import AñadirProducto from "./AñadirProducto"
import Login_voluntario from './login_voluntario';
import EditarProducto from './EditarProducto';

  function App() {
    const [loading, setLoading] = useState(true);
    const { idComprador } = useParams();
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
    }, [idComprador, idVendedor, idVoluntario, idTienda]);

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
            <Route path="/login_voluntario" element={<Login_voluntario />} />
            <Route path="/registro_vendedor" element={<Registro_Vendedor />} />
            <Route path="/registro_voluntario" element={<Registro_Voluntario />} />
            <Route path="/login_comprador/Inicio_comprador/:idComprador" element={<Inicio_comprador/>} />
            <Route path="/login_vendedor/Inicio_vendedor/:idVendedor" element={<Inicio_vendedor/>} />
            <Route path="/login_vendedor/Inicio_vendedor/:idVendedor/edit/:id" element={<EditarProducto />} />
            <Route path="/Productos/tienda/:idTienda" element={<Productos />} />
            <Route path="/AceptarRechazarPedidos/pedido/:idPedido" element={<AceptarRechazarPedidos />} />
            <Route path="/carrito" element={<Carrito cartItems={cartItems} />} />
            <Route path="/PantallaPago" element={<PantallaPago />} />
            <Route path="/login_vendedor/Inicio_vendedor/:idVendedor/GestionTienda" element={<GestionTienda />} />
            <Route path="/AñadirProducto" element={<AñadirProducto />} />
          </Routes>
          </CartProvider>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
