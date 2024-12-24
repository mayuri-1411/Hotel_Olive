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
    case 'Chicken Biryani':
      return portion === 'full' ? 150 : 120;
    case 'Chicken Dum Biryani':
      return portion === 'full' ? 140 : 100;
    case 'Mutton Biryani':
      return portion === 'full' ? 180 : 140;
    case 'Sp.Mutton Thali':
      return portion === 'full' ? 180 : 0;
    case 'Sp.chicken Thali':
      return portion === 'full' ? 120 : 0;
    case 'Mutton Handi':
      return portion === 'full' ? 350 : 250;
    case 'Chicken 65':
      return portion === 'full' ? 120 : 80;
    case 'Chicken Lolipop':
      return portion === 'full' ? 160 : 120;
    case 'Chicken Handi':
      return portion === 'full' ? 300 : 220;
    default:
      return 0;
  }
}

document.addEventListener('DOMContentLoaded', function () {
});
