let cart = [];

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    sidebar.classList.toggle('active');
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price}</span>
            <button onclick="removeFromCart(${index})">×</button>
        `;
        cartItems.appendChild(itemElement);
        total += item.price;
    });
    
    cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Close cart when clicking outside
document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('cartSidebar');
    const cartIcon = document.querySelector('.cart-icon');
    
    if (!sidebar.contains(e.target) && e.target !== cartIcon) {
        sidebar.classList.remove('active');
    }
});