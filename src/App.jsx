import Navbar from "./components/Navbar.jsx";
import Cart from "./components/Cart.jsx";
import Footer from "./components/Footer.jsx";

// Conservamos los formularios completos del Hito 2 para los próximos hitos.
// import Login from "./components/Login.jsx";
// import Registro from "./components/Registro.jsx";
// import Home from "./components/Home.jsx";


function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        {/* <Home /> */}
        {/* <Login /> */}
        {/* <Registro /> */}

        <Cart />
      </main>

      <Footer />
    </div>
  );
}


export default App;
