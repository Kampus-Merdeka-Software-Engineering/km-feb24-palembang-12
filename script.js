// Memuat file JSON
fetch('nyc-sales.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(dataArray => {
        // Pastikan kode untuk memproses dataArray berada di sini
        const container = document.getElementById('data-container');
        
        // Asumsikan kita hanya ingin menampilkan item pertama dari array sebagai contoh
        const item = dataArray[0]; // Mengakses item pertama

        // Membuat elemen tabel dan thead
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th>BOROUGH</th>
                <th>NEIGHBORHOOD</th>
                <th>BUILDING CLASS CATEGORY</th>
                <th>TAX CLASS AT PRESENT</th>
                <th>BLOCK</th>
                <th>LOT</th>
            </tr>`;
        table.appendChild(thead);

        // Membuat elemen tbody
        const tbody = document.createElement('tbody');
        tbody.innerHTML = `
            <tr>
                <td>${item.BOROUGH}</td>
                <td>${item.NEIGHBORHOOD}</td>
                <td>${item.BUILDING_CLASS_CATEGORY}</td>
                <td>${item.TAX_CLASS_AT_PRESENT}</td>
                <td>${item.BLOCK}</td>
                <td>${item.LOT}</td>
            </tr>`;
        table.appendChild(tbody);

        // Menambahkan tabel ke dalam container
        container.appendChild(table);
    })
    .catch(error => {
        console.error('There was a problem with fetching the JSON:', error);
    });
