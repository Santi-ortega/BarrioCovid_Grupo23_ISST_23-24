import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portada from './portada';
function App() {
  return (
    <div className="App">
      <header>
        BarrioCovid
      </header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portada />} />
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
