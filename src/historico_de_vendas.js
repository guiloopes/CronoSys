// Load sales data from localStorage and display in table
function loadSales() {
    const sales = JSON.parse(localStorage.getItem('sales')) || [];
    const tbody = document.getElementById('salesTableBody');
    tbody.innerHTML = '';
    sales.forEach(sale => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${sale.saleDate}</td>
            <td>${sale.product}</td>
            <td>${sale.quantity}</td>
            <td>${sale.total}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Filter sales by product name
function filterSales() {
    const searchTerm = document.getElementById('productSearch').value.toLowerCase();
    const sales = JSON.parse(localStorage.getItem('sales')) || [];
    const tbody = document.getElementById('salesTableBody');
    tbody.innerHTML = '';
    sales.filter(sale => sale.product.toLowerCase().includes(searchTerm))
        .forEach(sale => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${sale.saleDate}</td>
                <td>${sale.product}</td>
                <td>${sale.quantity}</td>
                <td>${sale.total}</td>
            `;
            tbody.appendChild(tr);
        });
}

document.getElementById('searchButton').addEventListener('click', filterSales);

// Load sales on page load
window.onload = loadSales;
