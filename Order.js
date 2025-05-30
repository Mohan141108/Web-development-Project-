let cart = [];Add commentMore actions
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    cartItemsList.innerHTML = '';
    cart.forEach(cartItem => {
        const li = document.createElement("li");
        li.textContent = `${cartItem.item} - ₹${cartItem.price}`;
        cartItemsList.appendChild(li);
    });

    totalPrice.textContent = total;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let itemList = cart.map(item => item.item).join(", ");
    alert(`Thank you for ordering: ${itemList}\nTotal: ₹${total}`);

    // Reset cart
    cart = [];
    total = 0;
    updateCart();
}
