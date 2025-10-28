import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/navbar";
import Home from "./pages/home";
import Product from "./pages/product";
import Price from "./pages/price";
import Contact from "./pages/contact";
import About from "./pages/about";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <div
        style={{
          backgroundColor: "#9b9bc9ff",
          minHeight: "100vh",
          paddingBottom: "50px",
          margin: "20px",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <div>
      </div>
    </BrowserRouter>
  </StrictMode>
);
