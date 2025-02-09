
const cartItems = [
  {
    id: 1,
    name: "Medicine A",
    image: "images/p-1.jpg",
    price: 99.99,
    quantity: 2,
  },
  {
    id: 2,
    name: "Medicine B",
    image: "images/p-2.jpg",
    price: 89.99,
    quantity: 1,
  },
  {
    id: 3,
    name: "Medicine C",
    image: "images/p-3.jpg",
    price: 79.99,
    quantity: 1,
  },{
    id: 4,
    name: "Medicine D",
    image: "images/p-4.jpg",
    price: 69.99,
    quantity: 1,
  },{
    id: 5,
    name: "Medicine E",
    image: "images/p-5.jpg",
    price: 59.99,
    quantity: 1,
  },{
    id: 6,
    name: "Medicine F",
    image: "images/p-6.jpg",
    price: 49.99,
    quantity: 1,
  },
];


function updateCart() {
    const cartContainer = document.querySelector(".cart-items");
    const totalCostElement = document.getElementById("total-cost");
  
    let totalCost = 0;
  
    cartContainer.innerHTML = "";
  
  
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
    cartItems.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      totalCost += itemTotal;
  
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
  
      const itemImageContainer = document.createElement("div");
      itemImageContainer.classList.add("cart-item-image");
      const itemImage = document.createElement("img");
      itemImage.src = item.image;
      itemImage.alt = item.name;
      itemImageContainer.appendChild(itemImage);
  
      const itemDetails = document.createElement("div");
      itemDetails.classList.add("cart-item-details");
      const itemName = document.createElement("h3");
      itemName.textContent = item.name;
      const itemPrice = document.createElement("p");
      itemPrice.textContent = `Price: ₹ ${item.price}`;
      const itemQuantity = document.createElement("p");
      itemQuantity.textContent = `Quantity: ${item.quantity}`;
      const itemTotalElement = document.createElement("p");
      itemTotalElement.textContent = `Total: ₹ ${itemTotal}`;
  
      itemDetails.appendChild(itemName);
      itemDetails.appendChild(itemPrice);
      itemDetails.appendChild(itemQuantity);
      itemDetails.appendChild(itemTotalElement);
  
      cartItem.appendChild(itemImageContainer);
      cartItem.appendChild(itemDetails);
  
      cartContainer.appendChild(cartItem);
    });
  
    totalCostElement.textContent = `₹ ${totalCost.toFixed(2)}`;
  

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  

  updateCart();
  