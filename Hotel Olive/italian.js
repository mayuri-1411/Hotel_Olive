let cart = [];

function addToCart(itemId, portion, category) {
  const item = {
    id: itemId,
    portion: portion,
    category: category,
    price: getItemPrice(itemId, portion, category),
  };

  cart.push(item);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById('cartItems');
  const totalPriceElement = document.getElementById('totalPrice');

  if (!cartItemsElement || !totalPriceElement) {
    console.error("Cart elements not found");
    return;
  }

  cartItemsElement.innerHTML = '';

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.id} (${item.portion}): ₹${item.price}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.style.color = 'black';
    removeBtn.style.padding = '3px';
    removeBtn.style.fontFamily = 'Bodoni MT';
    removeBtn.style.marginLeft = '8px';
    removeBtn.onclick = () => removeFromCart(index);

    li.appendChild(removeBtn);
    cartItemsElement.appendChild(li);
  });

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  totalPriceElement.textContent = totalPrice;
}

function getItemPrice(itemId, portion ) {
    switch (itemId) {
      case 'Cheese-Pizza':
        return portion === 'large' ? 349 : portion === 'medium' ? 250 : 190;
      case 'Veggie Pizza':
        return portion === 'large' ? 250 : portion === 'medium' ? 190: 140;
      case 'Corn Pizza':
        return portion === 'large' ? 250 : portion === 'medium' ? 200 : 150;
      case 'Chicken Burger':
        return portion === 'jumbo' ? 140 : 100;
      case 'Tikki Burger':
        return portion === 'jumbo' ? 100 : 80;
      case 'Makhani Pasta':
        return portion === 'full' ? 120 : 80;
      case 'Cheese Pasta':
        return portion === 'full' ? 140 : 100;
      case 'Italian Pasta':
        return portion === 'full' ? 160 : 130;
      case 'Veg Burger':
        return portion === 'jumbo' ? 100 : 80;
      default:
        return 0; // You should customize this based on your actual pricing logic
    }
  }
  

document.addEventListener('DOMContentLoaded', function () {
  // Your code here, for example, initialize any elements or setup
});
