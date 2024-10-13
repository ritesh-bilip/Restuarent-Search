window.onload = function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const subtotal = parseFloat(localStorage.getItem("total")) || 0;
  const gst = 0.1;
  const gstAmount = subtotal * gst;
  const totalBill = subtotal + gstAmount;

  const billItems = document.getElementById("bill-items");
  const subtotalElement = document.getElementById("subtotal");
  const gstElement = document.getElementById("gst");
  const totalBillElement = document.getElementById("total-bill");

  // Clear previous bill items
  billItems.innerHTML = "";

  // Add new bill items
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    billItems.appendChild(li);
  });

  // Update bill details
  subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
  gstElement.textContent = `GST (10%): $${gstAmount.toFixed(2)}`;
  totalBillElement.textContent = `Total Bill: $${totalBill.toFixed(2)}`;
};

function goBack() {
  window.history.back();
}
try {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!Array.isArray(cart)) {
    throw new Error("Cart is not an array");
  }
} catch (error) {
  console.error("Failed to load cart:", error);
  // Optionally, inform the user and reset the cart
  localStorage.removeItem("cart");
}
