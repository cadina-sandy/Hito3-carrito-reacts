import React from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

// Componentes reservados para revisar los otros hitos.
// import Home from "./components/Home";
// import LoginPage from "./components/LoginPage";
// import RegisterPage from "./components/RegisterPage";


function App() {
  return (
    <div className="app">
      <Navbar />

      {/* <Home /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}

      <Cart />

      <Footer />
    </div>
  );
}


export default App;
