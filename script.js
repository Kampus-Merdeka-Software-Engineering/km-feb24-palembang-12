// split navbar content
document.addEventListener("DOMContentLoaded", function() {
  fetch('./Component/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
    });
});

// fetch json file
document.addEventListener("DOMContentLoaded", async () => {
  const table = document.querySelector(".nyc-sales");
  // Memuat file JSON
  fetch("nyc-sales.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Terjadi Kesalahan Respon Jaringan");
      }
      return response.json();
    })
    .then((dataArray) => {
      const tbody = document.querySelector(".nyc-sales tbody");
      // check if data is not empty
      if (dataArray.length > 0) {
        let row = "";
        const startIndex = 0;
        const endIndex = 10;

        // menampilkan 10 data pertama
        for (let i = startIndex; i < endIndex; i++) {
          const item = dataArray[i];
          row += `
      <tr>
          <td id="no"></td>
          <td>${parseInt(item.BOROUGH)}</td>
          <td>${item.NEIGHBORHOOD}</td>
          <td>${item.BUILDING_CLASS_CATEGORY}</td>
          <td>${parseInt(item.TAX_CLASS_AT_PRESENT)}</td>
          <td>${parseInt(item.BLOCK)}</td>
          <td>${parseInt(item.LOT)}</td>
      </tr>`;
          tbody.innerHTML = row;
        }
      } else {
        // menampilkan "No Data Found" jika data empty
        tbody.innerHTML = `<tr><td colspan = 7><h3 class="text-center">No Data Found</h3></td>`;
      }
    })
    .catch((error) => {
      console.error("Error mengambil data dari JSON:", error);
      table.style.display = "none";
    });
});
