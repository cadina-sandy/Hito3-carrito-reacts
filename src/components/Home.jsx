import React from "react";
import Inicio from "./Inicio";
import CardPizza from "./CardPizza";
import { pizzas } from "../data/pizzas";


function Home() {
  return (
    <section className="home">
      <Inicio />

      {/* Creamos una tarjeta por cada pizza del arreglo. */}
      <section className="pizza-grid" aria-label="Nuestras pizzas">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </section>
    </section>
  );
}


export default Home;
