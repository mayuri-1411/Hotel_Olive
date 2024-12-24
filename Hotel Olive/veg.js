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
    case 'Paneer Masala':
      return portion === 'full' ? 150 : 120;
    case 'Paneer Handi':
      return portion === 'full' ? 200 : 140;
    case 'Shahi Pulav':
      return portion === 'full' ? 140 : 90;
    case 'Dal Makhani':
      return portion === 'full' ? 90 : 50;
    case 'Dal Tadka':
      return portion === 'full' ? 170 : 120;
    case 'Jeera Rice':
      return portion === 'full' ? 100 : 70;
    case 'Veg-Maratha':
      return portion === 'full' ? 160 : 130;
    case 'Tandoor Roti':
      return portion === 'full' ? 25 : 0;
    case 'Butter Roti':
      return portion === 'full' ? 30 : 0;
    default:
      return 0;
  }
}

document.addEventListener('DOMContentLoaded', function () {
});
