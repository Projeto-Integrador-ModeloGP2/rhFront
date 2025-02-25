import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

import "./App.css";
import CardFuncionario from "./components/funcionario/cardfuncionario/CardFuncionario";
import CardIntegrante from "./components/integrante/cardintegrante/CardIntegrante";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/funcionario" element={<CardFuncionario />} />
            <Route path="/integrante" element={<CardIntegrante />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
