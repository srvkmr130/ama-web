import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import {
  AboutUs,
  Career,
  Contacts,
  Home,
  Media,
  Navbar,
  Products,
  ProductDetail,
} from "./screens";
import Awards from "./screens/awards/Awards";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
