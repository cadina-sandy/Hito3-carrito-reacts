import React from "react";


function Navbar() {
  // La guía indica que el total de esta barra debe permanecer estático.
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <strong>Pizzería Mamma Mía</strong>

      <div className="nav-buttons">
        <button type="button">🍕 Home</button>
        <button type="button">🔐 Login</button>
        <button type="button">🔐 Register</button>
      </div>

      <button type="button" className="nav-total">🛒 Total: $0</button>
    </nav>
  );
}


export default Navbar;
