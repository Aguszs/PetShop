# PetShop

Sitio web para una tienda de productos para mascotas, desarrollado con HTML, CSS y JavaScript.

**Demo:** https://pet-shop-jet.vercel.app

## Funcionalidades

- Catálogo de cuchas, ropa y juguetes.
- Búsqueda de productos y filtros por categoría.
- Carrito con cantidades, eliminación de productos, vaciado y cálculo del total.
- Confirmación visual de compra y limpieza del carrito.
- Formulario de contacto con EmailJS.
- Navegación y diseño adaptados a pantallas chicas.

## Tecnologías

HTML5 · CSS3 · JavaScript · EmailJS · Vercel

## Estructura principal

- `index.html`: catálogo, carrito, contacto y navegación.
- `assets/cards.js`: productos y lógica del carrito.
- `assets/filtrado.js`: búsqueda, filtros y carrusel.
- `assets/style.css` y `assets/mediaq.css`: estilos y adaptación responsive.
- `index.login.html`: acceso y registro de usuario.
- `email.js`: integración del formulario de contacto con EmailJS.

## Ejecutar en local

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/Aguszs/PetShop.git
   cd PetShop
   ```
2. Abrí el proyecto con Live Server o con otro servidor estático. El sitio usa rutas desde la raíz.

## Alcance

El carrito funciona en el navegador y muestra una confirmación al finalizar, pero el sitio no procesa pagos ni guarda pedidos en un servidor. El acceso y el registro almacenan los datos localmente; no hay autenticación ni sincronización entre dispositivos. Para usar el formulario en una instalación propia, hay que configurar una cuenta de EmailJS.
