// Conservamos los colores y el nombre del encabezado del Hito 2.
// En este hito los botones quedan estáticos, como indica la pauta.
function Navbar() {
  return (
    <header className="site-header">
      <span className="brand">🍕 Pizzería Mamma Mía</span>

      <nav aria-label="Navegación principal">
        <button type="button">Inicio</button>
        <button type="button">Registro</button>
        <button type="button">Ingresar</button>
        <button type="button">🛒 Total: $0</button>
      </nav>
    </header>
  );
}


export default Navbar;
