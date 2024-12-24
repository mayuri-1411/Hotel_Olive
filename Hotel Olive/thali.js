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
    case 'Maharastrian Thali':
      return portion === 'full' ? 550 : 0;
    case 'Bengali Veg-Thali':
      return portion === 'full' ? 450 : 0;
    case 'Goa Veg-Thali':
      return portion === 'full' ? 400 : 0;
    case 'Rajasthani Thali':
      return portion === 'full' ? 490 : 0;
    case 'Kashmiri Thali':
      return portion === 'full' ? 599 : 0;
    case 'Gujrathi SP.Thali':
      return portion === 'full' ? 499 : 0;
    case 'Panjabi Thali':
      return portion === 'full' ? 450 : 0;
    case 'Malawa Thali':
      return portion === 'full' ? 499 : 0;
    case 'Andhra Thali':
      return portion === 'full' ? 350 : 0;
    default:
      return 0;
  }
}

document.addEventListener('DOMContentLoaded', function () {
});
