let salesData = [];
let buildingData = [];

// Fungsi memperbarui tampilan berdasarkan dropdown
function updateStats() {
    const buildingType = document.getElementById('buildingTypeDropdown').value;
    const location = document.getElementById('locationDropdown').value;

    // Filter data berdasarkan dropdown
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

function salesDisplay(){
    const data = salesData;
    const manhattanData = data.find(item => item.LOCATION === "Manhattan");
    if (manhattanData) {
        document.getElementById('total_sales_2016').textContent = formatNumber(manhattanData.TOTAL_SALES_2016);
        document.getElementById('total_sales_2017').textContent = formatNumber(manhattanData.TOTAL_SALES_2017);
        document.getElementById('sales_target_2018').textContent = formatNumber(manhattanData.SALES_TARGET_2018);
    } else {
        console.error('Data untuk Manhattan tidak ditemukan');
    }
}

function formatNumber(num) {
    const million = num / 1000000;
    const formattedNumber = million.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `$${formattedNumber}M`;
}

// data json building type
fetch("../data/sales_target_2018.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Terjadi Kesalahan Respon Jaringan");
        }
        return response.json();
    })
    .then((data) => {
        salesData = data;
        salesDisplay();
    })
    
    .catch((error) => {
        console.error('Error loading sales data:', error);
    });

// data json location
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

document.getElementById('buildingTypeDropdown').addEventListener('change', updateStats);
document.getElementById('locationDropdown').addEventListener('change', updateStats);
window.onload = updateStats;

// link to team section
const button = document.getElementById('teamButton');
button.addEventListener('click', function() {
    window.location.href = 'team.html';
});

const sales = document.getElementById('sales-learnMore');
sales.addEventListener('click', function() {
    window.location.href = 'sales.html';
});