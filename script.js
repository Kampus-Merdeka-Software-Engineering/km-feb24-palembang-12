// Memuat file JSON
fetch('nyc-sales.json')
    .then(response => {
        // Pastikan untuk menangani respons yang tidak berhasil
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(dataArray => {
        // Menampilkan data di halaman HTML
        const container = document.getElementById('data-container');

        // Menggunakan forEach untuk iterasi melalui setiap objek dalam array
        dataArray.forEach(item => {
            // Membuat elemen div untuk setiap properti
            const propertyDiv = document.createElement('div');
            propertyDiv.innerHTML = `
                <p>BOROUGH: ${item.BOROUGH}</p>
                <p>NEIGHBORHOOD: ${item.NEIGHBORHOOD}</p>
                <p>BUILDING CLASS CATEGORY: ${item.BUILDING_CLASS_CATEGORY}</p>
                <p>TAX CLASS AT PRESENT: ${item.TAX_CLASS_AT_PRESENT}</p>
                <p>BLOCK: ${item.BLOCK}</p>
                <p>LOT: ${item.LOT}</p>
                <p>BUILDING CLASS AT PRESENT: ${item.BUILDING_CLASS_AT_PRESENT}</p>
                <p>ADDRESS: ${item.ADDRESS}</p>
                <p>ZIP CODE: ${item.ZIP_CODE}</p>
                <p>RESIDENTIAL UNITS: ${item.RESIDENTIAL_UNITS}</p>
                <p>COMMERCIAL UNITS: ${item.COMMERCIAL_UNITS}</p>
                <p>TOTAL UNITS: ${item.TOTAL_UNITS}</p>
                <p>LAND SQUARE FEET: ${item.LAND_SQUARE_FEET}</p>
                <p>GROSS SQUARE FEET: ${item.GROSS_SQUARE_FEET}</p>
                <p>YEAR BUILT: ${item.YEAR_BUILT}</p>
                <p>TAX CLASS AT TIME OF SALE: ${item.TAX_CLASS_AT_TIME_OF_SALE}</p>
                <p>BUILDING CLASS AT TIME OF SALE: ${item.BUILDING_CLASS_AT_TIME_OF_SALE}</p>
                <p>SALE PRICE: ${item.SALE_PRICE}</p>
                <p>YEAR: ${item.YEAR}</p>
                <p>MONTH: ${item.MONTH}</p>
                <p>BUILDING TYPE: ${item.BUILDING_TYPE}</p>
                <hr>`;
            container.appendChild(propertyDiv);
        });
    })
    .catch(error => {
        console.error('There was a problem with fetching the JSON:', error);
    });
