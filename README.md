# PetShop

Tienda de práctica para una tienda de productos para mascotas. El catálogo se arma con JavaScript y permite buscar productos, filtrar por categoría y probar un carrito.

**Demo:** https://pet-shop-jet.vercel.app

## Qué incluye

- Catálogo con cuchas, ropa y juguetes, con búsqueda y filtros.
- Carrito de demostración con cantidades, eliminación de artículos y cálculo del total. El cierre no procesa pagos.
- Pantalla de registro e inicio de sesión de prueba. La cuenta solo existe durante la visita actual y no usa un servidor.
- Formulario de contacto conectado a EmailJS.
- Carrusel de marcas y navegación adaptada a pantallas chicas.

## Tecnologías

HTML · CSS · JavaScript · EmailJS · Vercel

## Archivos principales

- `index.html`: catálogo, carrito, contacto y navegación.
- `assets/cards.js`: productos y lógica del carrito.
- `assets/filtrado.js`: búsqueda, filtros y carrusel.
- `assets/style.css` y `assets/mediaq.css`: estilos y adaptación responsive.
- `index.login.html` y `assets/img/login.js`: pantallas y flujo de acceso de demostración.
- `email.js`: envío del formulario con EmailJS.

## Ejecutar en local

1. Cloná el repositorio: `git clone https://github.com/Aguszs/PetShop.git`
2. Abrilo con un servidor local, como Live Server. La web usa rutas desde la raíz, por lo que abrir el HTML directamente como archivo puede hacer que no carguen algunos recursos.

## Alcance de la demo

No hay pagos ni autenticación de producción. Para usar el login con cuentas reales o recibir pedidos hace falta conectar un backend. El formulario depende de la configuración de EmailJS del proyecto.
