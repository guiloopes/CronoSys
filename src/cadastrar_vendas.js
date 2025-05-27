const form = document.getElementById('salesForm');

function formatCurrency(input) {
    let value = input.value;

    // Remove all non-digit characters except comma and dot
    value = value.replace(/[^\d,\.]/g, '');

    // Replace comma with dot for decimal consistency
    value = value.replace(/,/g, '.');

    // Parse to float
    let floatValue = parseFloat(value);

    if (isNaN(floatValue)) {
        input.value = '';
        return;
    }

    // Format as Brazilian Real currency
    input.value = floatValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const totalInput = document.getElementById('total');
totalInput.addEventListener('blur', function () {
    formatCurrency(this);
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const saleDate = form.saleDate.value;
    const product = form.product.value;
    const quantity = form.quantity.value;
    const total = form.total.value;

    if (!saleDate || !product || !quantity || !total) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Retrieve existing sales from localStorage or initialize empty array
    let sales = JSON.parse(localStorage.getItem('sales')) || [];

    // Add new sale
    sales.push({ saleDate, product, quantity, total });

    // Save back to localStorage
    localStorage.setItem('sales', JSON.stringify(sales));
    
    alert('Venda salva com sucesso!');

    // Reset form
    form.reset();
});
