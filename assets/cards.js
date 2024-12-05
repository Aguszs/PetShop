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

// Función para actualizar el contador y el total del carrito
function updateCart() {
    cartCount.textContent = cart.length;
    let total = cart.reduce((sum, item) => sum + item.precio, 0);
    cartTotal.textContent = total;
    renderCartItems();
}

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



// Modificar la función renderCards para añadir el botón "Agregar al carrito"
function renderCards() {
    const container = document.getElementById('cards-container');
    cardData.forEach(data => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${data.imageUrl}" alt="${data.title}">
            <h3>${data.title}</h3>
            <p>Precio: $${data.precio}</p>
            <button class="add-to-cart">Agregar al carrito</button>
        `;

        const addToCartButton = card.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', () => addToCart(data));

        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderCards);


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
        showError('Por favor, agregar producto');
    } else {
        showSuccess('¡Compra realizada con éxito!');
        cart = [];
        updateCart();
        cartModal.classList.add('hidden');
    }
});
function updateCart() {
    cartCount.textContent = cart.length;
    let total = cart.reduce((sum, item) => sum + (item.precio * item.quantity), 0); // Calcular total considerando la cantidad
    cartTotal.textContent = total.toFixed(2); // Mostrar total con dos decimales
    renderCartItems();
}

/* menu burguer */

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Alternar la clase activa
});

document.getElementById('signupButton').addEventListener('click', function () {
    const username = document.getElementById('signupUsername').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();

    if (!username || !email || !password) {
        alert('Por favor completa todos los campos del registro.');
        return;
    }

    // Guardar los datos en localStorage
    localStorage.setItem('registeredEmail', email);
    localStorage.setItem('registeredPassword', password);
    alert('Registro exitoso. Ahora inicia sesión.');
});

// Validación del formulario de inicio de sesión
document.getElementById('loginButton').addEventListener('click', function () {
    const registeredEmail = localStorage.getItem('registeredEmail');
    const registeredPassword = localStorage.getItem('registeredPassword');

    const loginEmail = document.getElementById('loginEmail').value.trim();
    const loginPassword = document.getElementById('loginPassword').value.trim();

    if (!loginEmail || !loginPassword) {
        alert('Por favor completa todos los campos del login.');
        return;
    }

    if (loginEmail === registeredEmail && loginPassword === registeredPassword) {
        alert('Bienvenido al sistema!');
    } else {
        alert('Error: Email o contraseña incorrectos.');
    }
});

