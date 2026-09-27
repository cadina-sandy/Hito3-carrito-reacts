# 🍕 Hito 3 de Pizzería Mamma Mía - Carrito

Proyecto realizado para el desafío **Hito 3 - Pizzería Mamma Mía**, donde se implementa la renderización dinámica de componentes y un carrito de compras utilizando React.

## 🚀 Deploy

Pendiente de agregar el enlace del sitio publicado.

## 📝 Descripción

La aplicación muestra un carrito de compras con las pizzas del archivo de apoyo `pizzas.js`. Permite modificar las cantidades y calcular el total del pedido.

También incluye el componente `Home`, que recorre un arreglo de seis pizzas y muestra una tarjeta por cada una. Para este hito, el carrito es la vista principal y `Home` queda comentado en `App.jsx`.

## ✨ Funcionalidades

- Mostrar seis tarjetas de pizzas en el componente Home.
- Enviar el nombre, precio, ingredientes e imagen mediante props.
- Mostrar cada ingrediente en un elemento de lista.
- Mostrar la imagen, nombre, precio y cantidad de cada pizza del carrito.
- Aumentar y disminuir la cantidad de pizzas.
- Eliminar una pizza cuando su cantidad llega a cero.
- Calcular el total de la compra según las cantidades.
- Mostrar un mensaje cuando el carrito está vacío.
- Mostrar los precios con separador de miles.
- Incluir el botón Pagar sin funcionalidad por ahora.
- Mantener el total del Navbar estático, como indica la pauta.
- Adaptar la interfaz a pantallas de escritorio y dispositivos móviles.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- React

## 📁 Estructura del proyecto

```text
Hito3-carrito-reacts/
├── public/
│   └── images/
│       └── pizza.svg
├── src/
│   ├── components/
│   │   ├── CardPizza.jsx
│   │   ├── Cart.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── LoginPage.jsx
│   │   ├── Navbar.jsx
│   │   └── RegisterPage.jsx
│   ├── data/
│   │   └── pizzas.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Cómo funciona

En `App.jsx` se muestran los componentes `Navbar`, `Cart` y `Footer`. Los componentes `Home`, `LoginPage` y `RegisterPage` quedan comentados.

En `Home.jsx` se importa el arreglo `pizzas` y se utiliza `map()` para crear un componente `CardPizza` por cada pizza. Cada tarjeta recibe la información mediante props y recorre los ingredientes para mostrarlos en una lista.

En `Cart.jsx` se utiliza el hook `useState` para guardar el arreglo `pizzaCart`. Los botones permiten aumentar o disminuir la cantidad de cada pizza. Al llegar a cero, se utiliza `filter()` para quitarla del carrito.

El total se calcula con `reduce()`, sumando el precio de cada pizza multiplicado por su cantidad. Los valores se muestran con separador de miles utilizando `toLocaleString("es-CL")`.

Los datos e imágenes provienen del archivo de apoyo `pizzas.js`. Los componentes de registro e inicio de sesión son de reserva y no incluyen formularios ni validaciones en esta versión creada desde cero.

## 💻 Ejecutar el proyecto

Para instalar las dependencias:

```bash
npm install
```

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Para compilar el proyecto:

```bash
npm run build
```

## ⬆️ Subida del proyecto

El código fue guardado y subido a GitHub en la rama `main`. Las carpetas `node_modules` y `dist` están excluidas mediante el archivo `.gitignore`.

## 🔗 Repositorio

[Ver repositorio en GitHub](https://github.com/cadina-sandy/Hito3-carrito-reacts)

## 👩‍💻 Autora

**Sandy Cadin**
