// Menyembunyikan dan menampilkan konten berdasarkan navigasi
function navigate(section) {
    const sections = ['dashboard', 'sales', 'inventory', 'reports'];
    sections.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(section).classList.remove('hidden');
}

// Data sample untuk penjualan
const salesData = [
    { id: 1, name: 'Sunset in the Mountains', price: 'Rp 500,000', date: '2024-10-28' },
    { id: 2, name: 'Abstract Waves', price: 'Rp 750,000', date: '2024-10-28' }
];

// Data sample untuk stok lukisan
const inventoryData = [
    { id: 1, name: 'Sunset in the Mountains', stock: 3 },
    { id: 2, name: 'Abstract Waves', stock: 5 }
];

// Memuat data ke dalam tabel penjualan
function loadSalesData() {
    const salesTable = document.getElementById('sales-table');
    salesTable.innerHTML = ''; // Bersihkan tabel

    salesData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.date}</td>
        `;
        salesTable.appendChild(row);
    });

    // Menghitung total penjualan
    const totalSales = salesData.reduce((total, item) => total + parseInt(item.price.replace('Rp ', '').replace(',', '')), 0);
    document.getElementById('total-sales').innerText = `Rp ${totalSales.toLocaleString()}`;
    document.getElementById('paintings-sold').innerText = salesData.length;
}

// Memuat data ke dalam tabel stok
function loadInventoryData() {
    const inventoryTable = document.getElementById('inventory-table');
    inventoryTable.innerHTML = ''; // Bersihkan tabel

    inventoryData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.stock}</td>
        `;
        inventoryTable.appendChild(row);
    });
}

// Panggil fungsi untuk memuat data saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    loadSalesData();
    loadInventoryData();
    navigate('dashboard'); // Tampilkan dashboard saat pertama kali
});
