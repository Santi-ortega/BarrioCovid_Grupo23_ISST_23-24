import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portada from './portada';
import Registro_Comprador from "./registro_comprador";
import Login from './login';
function App() {
  return (
    <div className="App">
      <header>
        BarrioCovid
        <img src="BC.jpg" className="logo" />
      </header>
      <br/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portada />} />
            <Route path="/registro_comprador" element={<Registro_Comprador />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
