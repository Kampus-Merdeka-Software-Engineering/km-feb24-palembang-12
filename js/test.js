// const numberFormat = new Intl.NumberFormat();
// fetch("../data/avg-sales.json")
//   .then((response) => {
//     if (!response.ok) {
//       throw new error("kesalhan");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     const sumAvgPrice = data
//       .reduce((sum, item) => sum + item.AVERAGE_SALES_PRICE, 0)
//       .toFixed(2);
//     const sumTotalUnits = data.reduce((sum, item) => sum + item.TOTAL_UNITS, 0);

//     console.log("total units: ", numberFormat.format(sumTotalUnits));
//     console.log(
//       `total average sales price: $${numberFormat.format(sumAvgPrice)}`
//     );
//   });

let salesData = [];
let buildingData = [];
const btn = document.getElementById("btnClick");

// Fungsi untuk memperbarui tampilan berdasarkan pilihan dropdown
function updateStats() {
  const filteredBuildingData = buildingData.find(
    (item) => item.LOCATION === "Queens" && item.BUILDING_TYPE === "Residential"
  );
  console.log(filteredBuildingData);
  // const filteredlocation = salesData.filter((item) => {
  //   return item.LOCATION === "Queens";
  // });
  // const queensData = salesData.find((item) => item.LOCATION === "Queens");

  // const location = salesData.map((item) => {
  //   return item.LOCATION;
  // });

  // console.log(queensData);
  // console.log(filteredlocation.LOCATION);
  // console.log(location);
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
    console.error("Error loading sales data:", error);
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
    console.error("Error loading building data:", error);
  });

// Tambahkan event listener ke dropdowns untuk memanggil updateStats setiap kali ada perubahan
btn.addEventListener("click", updateStats);
