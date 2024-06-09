let salesData = [];
let buildingData = [];
let dataLoaded = false;


// Function to update the display based on dropdowns
function updateStats() {
    if (!dataLoaded) {
        // Data not loaded, do nothing
        return;
    }

    const buildingType = document.getElementById('buildingTypeDropdown').value;
    const location = document.getElementById('locationDropdown').value;

    // Filter data based on dropdowns
    const filteredBuildingData = buildingData.find(item => item.LOCATION === location && item.BUILDING_TYPE === buildingType);
    const filteredSalesData = salesData.find(item => item.LOCATION === location);
    
    // default data
    const data = {
        avgPrice: buildingData.reduce((acc, item) => acc + item.AVERAGE_SALES_PRICE, 0),
        sales2017: salesData.reduce((acc, item) => acc + item.TOTAL_SALES_2017, 0),
        target2018: salesData.reduce((acc, item) => acc + item.SALES_TARGET_2018, 0),
        totalUnits: buildingData.reduce((acc, item) => acc + item.TOTAL_UNITS, 0)
    }

    if (filteredBuildingData && filteredSalesData) {
        const building = filteredBuildingData;
        const sales = filteredSalesData;

        // Update display with filtered data
        document.getElementById('averageSalePrice').innerText = `$${parseFloat(building.AVERAGE_SALES_PRICE.toFixed(0)).toLocaleString()}`;
        document.getElementById('totalUnits').innerText = building.TOTAL_UNITS.toLocaleString();
        document.getElementById('totalSales2017').innerText = `$${formatNumber(sales.TOTAL_SALES_2017)} M`;
        document.getElementById('totalSales2018').innerText = `$${formatNumber(sales.SALES_TARGET_2018)} M`;
    } else {
        
        // Reset display to default sums
        const avgPrice = data.avgPrice / buildingData.length;
        document.getElementById('averageSalePrice').innerText = `$${avgPrice.toFixed(0).toLocaleString()}`;
        document.getElementById('totalUnits').innerText = data.totalUnits.toLocaleString();
        document.getElementById('totalSales2017').innerText = `$${formatNumber(data.sales2017)} M`;
        document.getElementById('totalSales2018').innerText = `$${formatNumber(data.target2018)} M`;
    }
}

function salesDisplay(){
    const data = salesData;
    const manhattanData = data.find(item => item.LOCATION === "Manhattan");
    if (manhattanData) {
        document.getElementById('total_sales_2016').textContent = `$${formatNumber(manhattanData.TOTAL_SALES_2016)} M`;
        document.getElementById('total_sales_2017').textContent = `$${formatNumber(manhattanData.TOTAL_SALES_2017)} M`;
        document.getElementById('sales_target_2018').textContent = `$${formatNumber(manhattanData.SALES_TARGET_2018)} M`;
    } else {
        console.error('Data untuk Manhattan tidak ditemukan');
    }
}

function formatNumber(num) {
    const million = num / 1000000;
    const formattedNumber = million.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedNumber;
}

// Fetch sales data
fetch("../data/sales_target_2018.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        salesData = data;
        checkDataLoaded();
    })
    .catch(error => {
        console.error('Error loading sales data:', error);
    });

// Fetch building data
fetch("../data/avg-sales.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        buildingData = data;
        checkDataLoaded();
    })
    .catch(error => {
        console.error('Error loading building data:', error);
    });

function checkDataLoaded() {
    if (salesData.length > 0 && buildingData.length > 0) {
        dataLoaded = true;
        updateStats();
        salesDisplay();
    }
}

document.getElementById('buildingTypeDropdown').addEventListener('change', updateStats);
document.getElementById('locationDropdown').addEventListener('change', updateStats);

// Link to team section
const button = document.getElementById('teamButton');
button.addEventListener('click', function() {
    window.location.href = 'team.html';
});

const sales = document.getElementById('sales-learnMore');
sales.addEventListener('click', function() {
    window.location.href = 'sales.html';
});
