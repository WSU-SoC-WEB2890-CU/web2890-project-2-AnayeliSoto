document.addEventListener("DOMContentLoaded", function () {
  let cartCount = 0
  const cartCountElement = document.getElementById("cart-count")

  const addToCartButtons = document.querySelectorAll(".add-to-cart-button")

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const cardBody = button.closest(".card-body")
      const quantityInput = cardBody.querySelector(".quantity-input-number")

      if (!button.disabled && quantityInput) {
        const quantity = parseInt(quantityInput.value, 10) || 1
        cartCount += quantity
        cartCountElement.textContent = cartCount
      }
    })
  })
})
