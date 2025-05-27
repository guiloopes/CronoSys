const productList = document.getElementById('productList');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

function displayProducts(products) {
  if (products.length === 0) {
    productList.innerHTML = '<p>Nenhum produto encontrado.</p>';
    return;
  }
  let html = '<ul style="list-style-type:none; padding:0;">';
  products.forEach((p, index) => {
    html += `<li style="background:#f9f9f9; margin-bottom:10px; padding:10px; border-radius:6px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display:flex; justify-content: space-between; align-items: center;">
      <div style="min-width: 70%;">
        <div><strong>Código:</strong> ${p.codigo}</div>
        <div><strong>Local:</strong> ${p.local}</div>
        <div><strong>Nome do produto:</strong> ${p.nomeProduto}</div>
        <div><strong>Quantidade:</strong> <em>${p.quantidade}</em></div>
      </div>
      <button onclick="deleteProduct(${index})" style="background:#e74c3c; color:white; border:none; padding:5px 10px; border-radius:4px; cursor:pointer;">Excluir</button>
    </li>`;
  });
  html += '</ul>';
  productList.innerHTML = html;
}

function getProducts() {
  return JSON.parse(localStorage.getItem('products') || '[]');
}

function filterProducts(query) {
  const products = getProducts();
  if (!query) return products;
  return products.filter(p => p.codigo.toLowerCase().includes(query.toLowerCase()));
}

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const query = searchInput.value.trim();
  const filtered = filterProducts(query);
  displayProducts(filtered);
});

function deleteProduct(index) {
  let products = getProducts();
  products.splice(index, 1);
  localStorage.setItem('products', JSON.stringify(products));
  displayProducts(products);
}

// Display all products on page load
displayProducts(getProducts());
