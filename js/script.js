// Sparkle Jewellery – Product Data & Interactivity

const products = [
    {
        id: 1,
        name: "Golden Drop Earrings",
        category: "earrings",
        price: 28,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
        isNew: true
    },
    {
        id: 2,
        name: "Pearl Stud Earrings",
        category: "earrings",
        price: 22,
        image: "https://images.unsplash.com/photo-1617038260897-41a1b53647c8?w=400&h=400&fit=crop",
        isNew: false
    },
    {
        id: 3,
        name: "Sunburst Pendant Necklace",
        category: "necklaces",
        price: 35,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
        isNew: true
    },
    {
        id: 4,
        name: "Delicate Chain Necklace",
        category: "necklaces",
        price: 29,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
        isNew: false
    },
    {
        id: 5,
        name: "Beaded Charm Bracelet",
        category: "bracelets",
        price: 24,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
        isNew: true
    },
    {
        id: 6,
        name: "Minimal Gold Bracelet",
        category: "bracelets",
        price: 26,
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop",
        isNew: false
    },
    {
        id: 7,
        name: "Twisted Band Ring",
        category: "rings",
        price: 19,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
        isNew: true
    },
    {
        id: 8,
        name: "Simple Stacking Ring",
        category: "rings",
        price: 16,
        image: "https://images.unsplash.com/photo-1603561596112-0a132b757033?w=400&h=400&fit=crop",
        isNew: false
    },
    {
        id: 9,
        name: "Floral Hoop Earrings",
        category: "earrings",
        price: 32,
        image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=400&fit=crop",
        isNew: false
    },
    {
        id: 10,
        name: "Layered Necklace Set",
        category: "necklaces",
        price: 42,
        image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&h=400&fit=crop",
        isNew: true
    }
];

// Render products into a grid
function renderProducts(list, containerId = 'productsGrid') {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (list.length === 0) {
        container.innerHTML = '<p style="text-align:center;grid-column:1/-1;">No products found.</p>';
        return;
    }

    container.innerHTML = list.map(p => `
        <div class="product-card" data-category="${p.category}">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <div class="product-info">
                <div class="product-category">${p.category}${p.isNew ? '<span class="badge-new">NEW</span>' : ''}</div>
                <h3>${p.name}</h3>
                <div class="product-price">€${p.price}</div>
            </div>
        </div>
    `).join('');
}

// Filter buttons
function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            const filtered = filter === 'all' 
                ? products 
                : products.filter(p => p.category === filter);
            renderProducts(filtered);
        });
    });
}

// Mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // Order form handling (client-side only for demo)
    const form = document.getElementById('orderForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.style.display = 'none';
            document.getElementById('formSuccess').style.display = 'block';
        });
    }
});
