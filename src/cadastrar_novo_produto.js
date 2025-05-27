const form = document.querySelector('form');
const precoInput = document.getElementById('preco');
const cancelButton = document.querySelector('button.cancel');

function formatCurrency(value) {
  // Remove all non-digit characters
  let numericValue = value.replace(/\D/g, "");

  // Convert to number and divide by 100 to get cents
  let number = parseInt(numericValue, 10);
  if (isNaN(number)) {
    number = 0;
  }

  // Format number as currency string with "R$"
  let formatted = (number / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatted;
}

precoInput.addEventListener('input', function(e) {
  const cursorPosition = precoInput.selectionStart;
  const originalLength = precoInput.value.length;

  precoInput.value = formatCurrency(precoInput.value);

  const newLength = precoInput.value.length;
  precoInput.selectionEnd = cursorPosition + (newLength - originalLength);
});

cancelButton.addEventListener('click', function() {
  form.reset();
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Remove commas from price before saving
  const rawPreco = precoInput.value.replace(/[^0-9]/g, '');

  const product = {
    codigo: document.getElementById('codigo').value.trim(),
    nomeProduto: document.getElementById('nomeProduto').value.trim(),
    categoria: document.getElementById('categoria').value,
    descricao: document.getElementById('descricao').value.trim(),
    preco: rawPreco,
    quantidade: document.getElementById('quantidade').value.trim(),
    local: document.getElementById('local').value.trim()
  };

  if (!product.codigo || !product.nomeProduto) {
    alert('Por favor, preencha os campos Código e Nome do Produto.');
    return;
  }
  let products = JSON.parse(localStorage.getItem('products') || '[]');
  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));
  alert('Produto cadastrado com sucesso!');
  form.reset();
});
