// Filtra el catálogo por categoría y por texto.
let activeFilter = 'all';

function filterCards(filter = activeFilter, query = '') {
    const container = document.getElementById('cards-container');
    if (!container) return;

    activeFilter = filter;
    const normalizedQuery = query.trim().toLocaleLowerCase('es');

    const filteredData = cardData.filter(product => {
        const matchesCategory = filter === 'all' || product.clase === filter;
        const matchesSearch = product.title.toLocaleLowerCase('es').includes(normalizedQuery);
        return matchesCategory && matchesSearch;
    });

    container.replaceChildren();

    if (filteredData.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.className = 'empty-state';
        emptyMessage.textContent = 'No encontramos productos con esa búsqueda.';
        container.appendChild(emptyMessage);
        return;
    }

    filteredData.forEach(data => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <img src="${data.imageUrl}" alt="${data.title}" loading="lazy">
            <h3>${data.title}</h3>
            <p>Precio: $${data.precio}</p>
            <button class="add-to-cart" type="button">Agregar al carrito</button>
        `;

        card.querySelector('.add-to-cart').addEventListener('click', () => addToCart(data));
        container.appendChild(card);
    });
}

document.querySelectorAll('.filter-buttons [data-filter]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.filter === activeFilter));
    button.addEventListener('click', () => {
        document.querySelectorAll('.filter-buttons [data-filter]').forEach(filterButton => {
            filterButton.setAttribute('aria-pressed', String(filterButton === button));
        });
        filterCards(button.dataset.filter, document.getElementById('product-search')?.value || '');
    });
});

const productSearch = document.getElementById('product-search');
if (productSearch) {
    productSearch.addEventListener('input', () => {
        filterCards(activeFilter, productSearch.value);
    });
}

filterCards('all');

// Carrusel de marcas
const track = document.querySelector('.carousel-track');
const carouselSection = document.querySelector('.carousel-section');

if (track && carouselSection) {
    const items = Array.from(track.children);
    const controls = document.createElement('div');
    controls.className = 'carousel-controls';
    controls.setAttribute('aria-label', 'Controles de marcas');

    const previousButton = document.createElement('button');
    previousButton.type = 'button';
    previousButton.className = 'carousel-button';
    previousButton.textContent = 'Anterior';
    previousButton.setAttribute('aria-label', 'Ver marca anterior');

    const nextButton = document.createElement('button');
    nextButton.type = 'button';
    nextButton.className = 'carousel-button';
    nextButton.textContent = 'Siguiente';
    nextButton.setAttribute('aria-label', 'Ver marca siguiente');

    controls.append(previousButton, nextButton);
    carouselSection.querySelector('.carousel').appendChild(controls);

    let currentIndex = 0;
    const updateCarousel = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    previousButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (items.length > 1 && !reducedMotion) {
        let carouselTimer = setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }, 4500);

        carouselSection.addEventListener('mouseenter', () => clearInterval(carouselTimer), { once: true });
        carouselSection.addEventListener('focusin', () => clearInterval(carouselTimer), { once: true });
    }
}
