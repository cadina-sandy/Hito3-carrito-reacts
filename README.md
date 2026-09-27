# Hito 3 — Pizzería Mamma Mía

Proyecto básico en React y Vite, creado desde cero.

## Ejecutar

```sh
npm install
npm run dev
```

Para comprobar la compilación: `npm run build`.

## Qué incluye

- Home recorre seis pizzas y entrega los datos por props a CardPizza.
- CardPizza recorre los ingredientes con elementos li.
- Cart permite sumar, restar, eliminar al llegar a cero y calcular el total.
- Cart es la pantalla activa. Home, LoginPage y RegisterPage están comentados en App.jsx.
- El botón Pagar y los botones de la barra no realizan acciones en este hito.
- El total de la barra es estático.

El archivo src/data/pizzas.js es el material de apoyo proporcionado para la pauta.
Home y Cart usan sus nombres, ingredientes, precios, cantidades y enlaces de imágenes originales.
LoginPage y RegisterPage son componentes de reserva, porque no contamos con el Hito 2; no implementan sus validaciones.

## Revisar Home

En src/App.jsx, comenta la importación y el uso de Cart. Descomenta la importación y el uso de Home. No es necesario agregar rutas.

## Tres detalles de texto pendientes

Se dejaron intencionalmente tres tildes pendientes, sin afectar la lógica:

1. «Ver mas» → «Ver más», en CardPizza.jsx.
2. «Revisa aqui» → «Revisa aquí», en Cart.jsx.
3. «El pago estara» → «El pago estará», en Cart.jsx.

## Comprobación manual

El carrito comienza con $19.190. Al sumar una Napolitana, debe mostrar $25.140.
Al restarla, debe volver a $19.190. Al restarla otra vez, desaparece y queda $13.240.
Al quitar todas las pizzas, debe mostrar el carrito vacío y total $0.
