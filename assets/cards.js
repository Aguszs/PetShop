// Datos de ejemplo para las cards
const cardData = [
    {
        title: "Cucha Azul con Huellas",
        imageUrl: "/assets/img/cucha azul 2.png",
        precio:1400,
        clase: 'cucha'
    },
    {
        title: "Cucha azul y Colores",
        imageUrl: "/assets/img/cucha azul.png",
        precio:1400,
        clase:'cucha'
    },
    {
        title: "Cucha Gris",
        imageUrl: "/assets/img/cucha gris.png",
        precio: 1400,
        clase: 'cucha'
    },
    {
        title: "Cucha Cuadrada",
        imageUrl: "/assets/img/cucha cuadrada.png",
        precio: 2400,
        clase: 'cucha'
    },
    {
        title: "Cucha Militar",
        imageUrl: "/assets/img/cucha militar.png",
        precio: 2400,
        clase:'cucha'
    },
    {
        title: "Cucha Naranja",
        imageUrl: "/assets/img/cucha naranja.png",
        precio: 1400,
        clase: 'cucha'
    },
    {
        title: "Cucha Opaca",
        imageUrl: "/assets/img/cucha oscura.png",
        precio: 1040,
        clase: 'cucha'
    },
    {
        title: "Cucha Ladrido",
        imageUrl: "/assets/img/cucha wof.png",
        precio:1400,
        clase: 'cucha'
    },
    {
        title: "Indumentaria Boca",
        imageUrl: "/assets/img/boca.png",
        precio:2000,
        clase: 'ropa'
    },
    {
        title: "Indumentaria river",
        imageUrl: "/assets/img/river.png",
        precio:2000,
        clase: 'ropa'
    },
    {
        title: "Indumentaria belgrano",
        imageUrl: "/assets/img/belgrano.png",
        precio:2000,
        clase: 'ropa'
    },
    {
        title: "Indumentaria talleres",
        imageUrl: "/assets/img/talleres.png",
        precio:2000,
        clase: 'ropa'
    },
    {
        title: "Indumentaria instituto",
        imageUrl: "/assets/img/instituto.png",
        precio:2000,
        clase: 'ropa'
    },
    {
        title: "Ropa Azul",
        imageUrl: "/assets/img/ropa azul.png",
        precio:2000,
        clase: 'ropa'
    },
    {
        title: "Ropa Rosa",
        imageUrl: "/assets/img/ropa rosa.png",
        precio:2000,
        clase: 'ropa'
    },
    {
        title: "Ropa negra",
        imageUrl: "/assets/img/ropa.jpeg",
        precio:2000,
        clase: 'ropa'
    },
    {
        title: "Ropa Colores",
        imageUrl: "/assets/img/ropa colores.png",
        precio:2000,
        clase: 'ropa'
    },
    {
        title: "Indumentaria de Futbol",
        imageUrl: "/assets/img/ropadeFutbol.jpeg",
        precio:2000,
        clase: 'ropa'
    },
    {
        title: "Juguete Futbol",
        imageUrl: "/assets/img/futbolitos.png",
        precio:2000,
        clase: 'juguete'
    },
    {
        title: "Juguete Hueso",
        imageUrl: "/assets/img/juguete hueso.png",
        precio:2000,
        clase: 'juguete'
    },
    {
        title: "Juguete Pinchos",
        imageUrl: "/assets/img/juguete pinchos.png",
        precio:2000,
        clase: 'juguete'
    },
    {
        title: "Juguete Tiras",
        imageUrl: "/assets/img/juguete tira.png",
        precio:2000,
        clase: 'juguete'
    },
    {
        title: "Juguete Varios",
        imageUrl: "/assets/img/juguete.jpeg",
        precio:2000,
        clase: 'juguete'
    },
    {
        title: "Juguete para Morder",
        imageUrl: "/assets/img/pa morder.png",
        precio:2000,
        clase: 'juguete'
    },
    
];


let cart = [];
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const finalizeButton = document.getElementById('finalize-purchase');
const closeCartButton = document.getElementById('close-cart');
const viewCartButton = document.getElementById('view-cart');

// Renderiza los elementos dentro del carrito
function renderCartItems() {
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.title} - $${item.precio} x ${item.quantity}`; // Mostrar cantidad
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.addEventListener('click', () => {
            cart.splice(index, 1);
            updateCart();
        });
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });
}

// Añadir producto al carrito
function addToCart(product) {
    const existingProduct = cart.find(item => item.title === product.title);
    if (existingProduct) {
        // Si el producto ya existe, incrementar la cantidad
        existingProduct.quantity += 1;
    } else {
        // Si no existe, agregarlo al carrito con cantidad 1
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

// Mostrar/Ocultar carrito
viewCartButton.addEventListener('click', () => {
    cartModal.classList.toggle('hidden');
});

closeCartButton.addEventListener('click', () => {
    cartModal.classList.add('hidden');
});



// Mostrar mensaje de error
function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    setTimeout(() => {
        errorMessage.classList.add('hidden');
    }, 3000); // El mensaje desaparece después de 3 segundos
}


// Mostrar mensaje de éxito
function showSuccess(message) {
    const successMessage = document.getElementById('success-message');
    successMessage.textContent = message;
    successMessage.classList.remove('hidden');
    setTimeout(() => {
        successMessage.classList.add('hidden');
    }, 3000); // El mensaje desaparece después de 3 segundos
}

// Finalizar compra con validación y mensaje de éxito
finalizeButton.addEventListener('click', () => {
    if (cart.length === 0) {
        showError('Agregá al menos un producto para continuar.');
    } else {
        showSuccess('Pedido de prueba finalizado. No se realizó ningún cobro.');
        cart = [];
        updateCart();
        cartModal.classList.add('hidden');
    }
});
function updateCart() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    let total = cart.reduce((sum, item) => sum + (item.precio * item.quantity), 0); // Calcular total considerando la cantidad
    cartTotal.textContent = total.toFixed(2); // Mostrar total con dos decimales
    renderCartItems();
}

/* Menú de navegación */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!isExpanded));
        menuToggle.setAttribute('aria-label', isExpanded ? 'Abrir menú' : 'Cerrar menú');
        navLinks.classList.toggle('active', !isExpanded);
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menú');
        });
    });
}
