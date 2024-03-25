// Example data for donation cart (replace with actual data from the server)
const donationCart = [
    { id: 1, location: 'Community Center', date: '2024-03-15', time: '10:00 AM' },
    { id: 2, location: 'Hospital', date: '2024-03-18', time: '02:00 PM' },
];

function displayDonationCart() {
    const cartList = document.getElementById('cartList');

    donationCart.forEach(cartItem => {
        const cartItemElement = document.createElement('li');
        cartItemElement.innerHTML = `<strong>${cartItem.location}</strong><br>Date: ${cartItem.date}<br>Time: ${cartItem.time}
            <br><button onclick="removeFromCart(${cartItem.id})">Remove</button>`;
        cartList.appendChild(cartItemElement);
    });
}

function removeFromCart(itemId) {
    const updatedCart = donationCart.filter(item => item.id !== itemId);
    donationCart.length = 0; // Clear the original array
    donationCart.push(...updatedCart); // Push the updated items back

    // After updating the cart, refresh the display
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = ''; // Clear the existing content
    displayDonationCart(); // Display the updated cart
}

function checkout() {
    // In a real-world scenario, you would perform actions such as sending the cart data to the server
    // for processing, clearing the cart, updating the database, etc.
    console.log('Checkout clicked!');
    console.log('Cart Items:', donationCart);
}
