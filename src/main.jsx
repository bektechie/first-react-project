import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // ✅ only once

// Pages & components
import Home from "./pages/home"; // your layout
import Dashboard from "./components/Dashboard";
import Customers from "./components/Customers";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Admins from "./components/Admins";
import Settings from "./components/Settings";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categories />} />
          <Route path="admins" element={<Admins />} />
          <Route path="settings" element={<Settings />} />

          {/* Optional: redirect /home to /dashboard */}
          <Route path="home" element={<Navigate to="dashboard" replace />} />
        </Route>

        {/* Catch-all: redirect unknown paths to /dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
