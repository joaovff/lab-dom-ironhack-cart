// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = price * quantity;

  return parseFloat(subtotal);
}

function calculateAll() {
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
  }

  const total = document.getElementsByClassName('subtotal-span');
  let totalPrice = 0;
  for (let i = 0; i < total.length; i++) {
    totalPrice += parseFloat(total[i].innerHTML);
  }
  document.querySelector('#total-value span').textContent =
    parseFloat(totalPrice);
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  let newProductName = document.querySelector(
    '.create-product input[type="text"]'
  );
  let newProductPrice = document.querySelector(
    '.create-product input[type="number"]'
  );
  let tBody = document.querySelector('tbody');

  let newNameP = newProductName.value;
  let newPriceP = newProductPrice.value;

  let newRow = `
  <tr class="product">
    <td class="name">
      <span>${newNameP}</span>
    </td>
    <td class="price">$<span>${newPriceP}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span class="subtotal-span">0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`;

  tBody.innerHTML += newRow;
  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

window.addEventListener('load', () => {
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', () => createProduct());
});
