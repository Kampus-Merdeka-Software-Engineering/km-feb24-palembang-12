// Memuat file JSON
fetch('nyc-sales.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Terjadi Kesalahan Respon Jaringan');
        }
        return response.json();
    })
    .then(dataArray => {
        const container = document.getElementById('data-container');
        const item = dataArray[0];
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
        console.error('Error mengambil data dari JSON:', error);
    });
