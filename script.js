document.querySelectorAll('.toggle-details').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.previousElementSibling;
        details.classList.toggle('open');

        if (details.classList.contains('open')) {
            button.textContent = 'Show Less';
        } else {
            button.textContent = 'Show More';
        }
    });
});

<script>
  window.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');

    if (query) {
      const searchTerm = query.toLowerCase();
      const cards = document.querySelectorAll('.plant-card');

      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchTerm) ? '' : 'none';
      });
    }
  });
</script>


function searchCatalog() {


    const input = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const title = product.querySelector('.product-title').textContent.toLowerCase();
        const description = product.querySelector('.product-details').textContent.toLowerCase();

        if (title.includes(input) || description.includes(input)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function toggleFavorite(iconElement) {
    iconElement.classList.toggle('favorited');

    const productCard = iconElement.closest('.product-card');
    const clone = productCard.cloneNode(true);
    const favSection = document.getElementById('favouritesSection');
    const title = productCard.querySelector('.product-title').textContent;

    // Check if already added
    const exists = [...favSection.querySelectorAll('.product-title')].some(p => p.textContent === title);

    if (iconElement.classList.contains('favorited')) {
        if (!exists) favSection.appendChild(clone);
    } else {
        [...favSection.children].forEach(card => {
            if (card.querySelector('.product-title').textContent === title) {
                favSection.removeChild(card);
            }
        });
    }
}

