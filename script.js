// script.js

// Function to add an item to the cart
function addToCart(id, name, price, image) {
  const item = {
    id: id,
    name: name,
    price: price,
    image: image,
    quantity: 1,
  };

  // Get cart items from local storage or initialize an empty array
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Check if the item is already in the cart
  const existingItem = cartItems.find((item) => item.id === id);

  if (existingItem) {
    // If the item is already in the cart, increase its quantity
    existingItem.quantity += 1;
  } else {
    // If the item is not in the cart, add it to the cart
    cartItems.push(item);
  }

  // Save the updated cart items to local storage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Update the cart count on the home page
  updateCartCount(cartItems.length);
}

// Function to update the cart count on the home page
function updateCartCount(count) {
  const cartButton = document.querySelector("button[onclick='redirectToCart()']");
  cartButton.textContent = `Cart (${count})`;
}

// Call the updateCartCount function on page load
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
updateCartCount(cartItems.length);
