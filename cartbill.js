let cart = [];
let totalAmount = 0;

function addItem(button) {
  const cardContent = button.parentElement;
  const name = cardContent.getAttribute("data-name");
  const price = parseFloat(cardContent.getAttribute("data-price"));

  cart.push({ name, price });
  totalAmount += price;

  updateCart();
}

function updateCart() {
  const cartItemsList = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  cartItemsList.innerHTML = "";

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);
  });

  document.getElementById("total").textContent = `Total: $${totalAmount.toFixed(
    2
  )}`;
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function proceedToBill() {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("total", total);
  window.location.href = "ordersbill.html";
}

// function generateBill() {
//   let billDetails = "Your Bill:\n";
//   cart.forEach((item) => {
//     billDetails += `${item.name} - $${item.price.toFixed(2)}\n`;
//   });
//   billDetails += `Total: $${totalAmount.toFixed(2)}`;
//   return billDetails;
// }
