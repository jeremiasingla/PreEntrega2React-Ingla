import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./componentes/Navbar.jsx";
import ItemDetailContainer from "./componentes/ItemDetailContainer.jsx";
import Footer from "./componentes/Footer.jsx";
import Catalogo from "./componentes/Catalogo.jsx";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Catalogo greeting="✷ Welcome to Hell ✷" />} />
        <Route path="/category/:categoryId" element={<Catalogo />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
