// Filtrar productos por clase
function filterCards(filter) {
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; // Limpiar el contenedor de tarjetas

    // Filtrar productos según la clase
    const filteredData = filter === 'all' 
        ? cardData 
        : cardData.filter(product => product.clase === filter);

    // Renderizar las tarjetas filtradas
    filteredData.forEach(data => {
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

// Agregar evento de filtrado a los botones
document.querySelectorAll('.filter-buttons button').forEach(button => {
    button.addEventListener('click', (e) => {
        const filter = e.target.getAttribute('data-filter');
        filterCards(filter); // Llamar a la función de filtrado
    });
});

// Función para renderizar todas las tarjetas al inicio
function renderCards() {
    filterCards('all'); // Renderizar todas las tarjetas al principio
}

document.addEventListener('DOMContentLoaded', renderCards);
