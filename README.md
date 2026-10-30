# PetShop

Sitio de una tienda de productos para mascotas, creado con HTML, CSS y JavaScript.

**Demo:** https://pet-shop-jet.vercel.app

## Qué incluye

- Catálogo de cuchas, ropa y juguetes, con búsqueda y filtros por categoría.
- Carrito con cantidades, eliminación de artículos y cálculo del total.
- Preparación del pedido con productos y total en un mensaje de WhatsApp para coordinar el pago y la entrega.
- Registro e inicio de sesión local en el navegador.
- Formulario de contacto conectado a EmailJS.
- Carrusel de marcas y navegación responsive.

## Tecnologías

HTML · CSS · JavaScript · EmailJS · Vercel

## Archivos principales

- `index.html`: catálogo, carrito, contacto y navegación.
- `assets/cards.js`: productos y lógica del carrito y pedido.
- `assets/filtrado.js`: búsqueda, filtros y carrusel.
- `assets/style.css` y `assets/mediaq.css`: estilos y adaptación responsive.
- `index.login.html` y `assets/img/login.js`: registro e inicio de sesión local.
- `email.js`: envío del formulario con EmailJS.

## Ejecutar en local

1. Cloná el repositorio: `git clone https://github.com/Aguszs/PetShop.git`
2. Abrilo con un servidor local, como Live Server. La web usa rutas desde la raíz.

## Alcance

Los datos de acceso se guardan en el navegador actual; no hay un servidor de autenticación ni perfiles compartidos entre dispositivos. El pedido se prepara en WhatsApp y el cliente debe enviarlo para coordinar pago y entrega. El sitio no procesa pagos.