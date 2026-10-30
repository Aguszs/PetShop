# PetShop 🐾

Tienda online de productos para mascotas hecha con **HTML, CSS y JavaScript puro** (sin frameworks). Proyecto práctico del curso de Desarrollador FullStack en Nucba.

**Demo:** https://pet-shop-jet.vercel.app

## Funcionalidades

- **Catálogo dinámico:** los productos se guardan en un array de objetos y se renderizan con JavaScript (manipulación del DOM).
- **Catálogo:** búsqueda por nombre y filtros por categoría (cuchas, ropa y juguetes).
- **Carrito de compras:** agregar productos, sumar cantidades, eliminar, total calculado y validación al finalizar la compra.
- **Registro e inicio de sesión de práctica:** usa `localStorage` en este navegador; no es una cuenta real ni un sistema de autenticación para producción.
- **Formulario de contacto:** envío de mensajes por email con [EmailJS](https://www.emailjs.com/).
- **Carrusel** con controles, **menú hamburguesa** y diseño adaptable a celular.

## Tecnologías

HTML5 · CSS3 · JavaScript (ES6) · EmailJS · Git/GitHub · Vercel

## Estructura

```
index.html          Página principal (catálogo, carrito, contacto)
index.login.html    Registro e inicio de sesión
email.js            Envío del formulario de contacto
assets/cards.js     Datos de productos y lógica del carrito
assets/filtrado.js  Filtro por categoría y carrusel
assets/img/login.js Lógica de registro/login
assets/*.css        Estilos y media queries
```

## Cómo correrlo en local

1. Cloná el repositorio: `git clone https://github.com/Aguszs/PetShop.git`
2. Abrí la carpeta con un servidor local (por ejemplo, la extensión *Live Server* de VS Code), ya que las rutas son absolutas (`/assets/...`).

## Mejoras pendientes

- Guardar el carrito en `localStorage` para que no se pierda al recargar.
- Reemplazar el login simulado por un backend con base de datos.
