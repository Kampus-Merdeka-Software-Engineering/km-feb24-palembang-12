let salesData = [];
let buildingData = [];

// Fungsi untuk memperbarui tampilan berdasarkan pilihan dropdown
function updateStats() {
    const buildingType = document.getElementById('buildingTypeDropdown').value;
    const location = document.getElementById('locationDropdown').value;

    // Filter data berdasarkan pilihan dropdown
    const filteredBuildingData = buildingData.filter(item => item.LOCATION === location && item.BUILDING_TYPE === buildingType);
    const filteredSalesData = salesData.filter(item => item.LOCATION === location);

    if (filteredBuildingData.length > 0 && filteredSalesData.length > 0) {
        const building = filteredBuildingData[0];
        const sales = filteredSalesData[0];

        // Perbarui tampilan dengan data yang difilter
        document.getElementById('averageSalePrice').innerText = `$${building.AVERAGE_SALES_PRICE.toFixed(2)}`;
        document.getElementById('totalUnits').innerText = building.TOTAL_UNITS.toLocaleString();
        document.getElementById('totalSales2017').innerText = `$${(sales.TOTAL_SALES_2017 / 1000000).toFixed(2)} M`;
        document.getElementById('totalSales2018').innerText = `$${(sales.SALES_TARGET_2018 / 1000000).toFixed(2)} M`;
    } else {
        // Reset tampilan jika tidak ada data yang sesuai
        document.getElementById('averageSalePrice').innerText = '$0';
        document.getElementById('totalUnits').innerText = '0';
        document.getElementById('totalSales2017').innerText = '$0';
        document.getElementById('totalSales2018').innerText = '$0';
    }
}

// Muat data JSON pertama
fetch("../data/sales_target_2018.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Terjadi Kesalahan Respon Jaringan");
        }
        return response.json();
    })
    .then((data) => {
        salesData = data;
    })
    
    .catch((error) => {
        console.error('Error loading sales data:', error);
    });

// Muat data JSON kedua
fetch("../data/avg-sales.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Terjadi Kesalahan Respon Jaringan");
        }
        return response.json();
    })
    .then((data) => {
        buildingData = data;
    })
    .catch((error) => {
        console.error('Error loading building data:', error);
    });

// Tambahkan event listener ke dropdowns untuk memanggil updateStats setiap kali ada perubahan
document.getElementById('buildingTypeDropdown').addEventListener('change', updateStats);
document.getElementById('locationDropdown').addEventListener('change', updateStats);

// Panggil updateStats saat halaman pertama kali dimuat untuk menginisialisasi tampilan
window.onload = updateStats;
