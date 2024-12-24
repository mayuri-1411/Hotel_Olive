let cart = [];

function addToCart(itemId, portion) {
  const item = {
    id: itemId,
    portion: portion,
    price: getItemPrice(itemId, portion),
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

function getItemPrice(itemId, portion) {
  switch (itemId) {
    case 'Hakka Noodles':
      return portion === 'full' ? 120 : 90;
    case 'Garlic Noodles':
      return portion === 'full' ? 120 : 90;
    case 'Schezwan Noodles':
      return portion === 'full' ? 140 : 100;
    case 'Manchau Soup':
      return portion === 'full' ? 90 : 50;
    case 'Chicken Noodles':
      return portion === 'full' ? 170 : 120;
    case 'Manchau Noodles':
      return portion === 'full' ? 160 : 100;
    case 'Dry Manchurian':
      return portion === 'full' ? 110 : 80;
    case 'Chicken Fr Rice':
      return portion === 'full' ? 140 : 110;
    case 'Schezwan Rice':
      return portion === 'full' ? 140 : 110;
    default:
      return 0;
  }
}

document.addEventListener('DOMContentLoaded', function () {
});
