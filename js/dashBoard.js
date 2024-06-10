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
        sales2016: salesData.reduce((acc, item) => acc + item.TOTAL_SALES_2016, 0),
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
        document.getElementById('totalSales2017').innerText = `$${currencyFormatted(sales.TOTAL_SALES_2017)}`;
        document.getElementById('totalSales2018').innerText = `$${currencyFormatted(sales.SALES_TARGET_2018)}`;
    } else {
        
        // Reset display to default sums
        const avgPrice = data.avgPrice / buildingData.length;
        document.getElementById('averageSalePrice').innerText = `$${avgPrice.toFixed(0).toLocaleString()}`;
        document.getElementById('totalUnits').innerText = data.totalUnits.toLocaleString();
        document.getElementById('totalSales2017').innerText = `$${currencyFormatted(data.sales2017)}`;
        document.getElementById('totalSales2018').innerText = `$${currencyFormatted(data.target2018)}`;
    }
}

function salesDisplay(){
    const sales = {
        sales2016: salesData.reduce((acc, item) => acc + item.TOTAL_SALES_2016, 0),
        sales2017: salesData.reduce((acc, item) => acc + item.TOTAL_SALES_2017, 0),
        target2018: salesData.reduce((acc, item) => acc + item.SALES_TARGET_2018, 0),
    }
    if (sales) {
        document.getElementById('total_sales_2016').textContent = `$${currencyFormatted(sales.sales2016)}`;
        document.getElementById('total_sales_2017').textContent = `$${currencyFormatted(sales.sales2017)}`;
        document.getElementById('sales_target_2018').textContent = `$${currencyFormatted(sales.target2018)}`;
    } else {
        console.error('Data untuk Manhattan tidak ditemukan');
    }
}

const currencyFormatted = (num) => {
    return Intl.NumberFormat("en-US", { 
        notation: "compact",
        maximumFractionDigits: 1,
    }).format(num);
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


const borough = document.querySelectorAll('.location-item')
borough.forEach(item => {
    item.addEventListener("click", ()=>{
        const target = item.querySelector('h1').textContent.toLocaleLowerCase()
        window.location.href = `location.html#${target}`
    })
});


function directPage(page){
    window.location.href = page +".html"
}