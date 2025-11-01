import React from "react";
import "./home.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CategoryIcon from "@mui/icons-material/Category";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, Outlet, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation(); // For active link highlighting

  return (
    <div className="home-wrapper">
      {/* Sidebar */}
      <aside className="sidebar-container">
        <div className="left-section">
          <div className="left-item1">
            SM <AccountCircleIcon fontSize="small" />
          </div>

          <div className="nameunderline">
            <div className="left-item2">Souq Mubasher</div>
            <div className="left-item3">Item Panel</div>
          </div>
        </div>

        {/* Sidebar menu */}
        <nav className="menu-items">
          <Link
            to="/dashboard"
            className={`menu-link ${location.pathname === "/dashboard" ? "active" : ""}`}
          >
            <DashboardIcon /> Dashboard
          </Link>

          <Link
            to="/customers"
            className={`menu-link ${location.pathname === "/customers" ? "active" : ""}`}
          >
            <PeopleIcon /> Customers
          </Link>

          <Link
            to="/products"
            className={`menu-link ${location.pathname === "/products" ? "active" : ""}`}
          >
            <Inventory2Icon /> Products
          </Link>

          <Link
            to="/categories"
            className={`menu-link ${location.pathname === "/categories" ? "active" : ""}`}
          >
            <CategoryIcon /> Categories
          </Link>

          <Link
            to="/admins"
            className={`menu-link ${location.pathname === "/admins" ? "active" : ""}`}
          >
            <AdminPanelSettingsIcon /> Admins
          </Link>

          <Link
            to="/settings"
            className={`menu-link ${location.pathname === "/settings" ? "active" : ""}`}
          >
            <SettingsIcon /> Settings
          </Link>
        </nav>

        {/* Logout section */}
        <div className="logout-container">
          <LogoutIcon />
          <span>Logout</span>
        </div>
      </aside>

      {/* Main content area */}
      <main className="main-content">
        <Outlet /> {/* Nested pages will render here */}
      </main>
    </div>
  );
};

export default Home;
