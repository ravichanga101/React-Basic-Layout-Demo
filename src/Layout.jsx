// Layout.js
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css"; // Import your CSS file here

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <h1>My Website</h1>
        <nav className="nav">
          <NavLink to="/">Home</NavLink> <NavLink to="/about">About</NavLink>{" "}
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="main-container">
        <aside className="aside">
          <h1>Side Bar</h1>
          <h3>Items</h3>
          <h3>Items</h3>
        </aside>
        <Outlet /> {/* Routed content will be rendered here */}
      </main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} My Website
      </footer>
    </div>
  );
};

export default Layout;
