// total units avg price table
fetch("../data/totalUnits_avgPrice.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Terjadi Kesalahan Respon Jaringan");
    }
    return response.json();
  })
  .then((data) => {
    // console.log(data);

    const locations = data.map((item) => item.LOCATION);
    const buildingType = data.map((item) => item["BUILDING TYPE"]);
    const avgSalesPrice = data.map((item) => item["AVERAGE SALES PRICE"]);
    const totalUnits = data.map((item) => item["TOTAL UNITS"]);
    const totalUnitsAvg = document.getElementById("totalUnitsAvg");
    
    if (totalUnitsAvg) {
      const tableData = data.map((item, index) => [
        locations[index],
        buildingType[index],
        avgSalesPrice[index],
        totalUnits[index]
      ]);

      const table = $(totalUnitsAvg).DataTable({
        data: tableData,
        columns: [
          { title: "Location" },
          { title: "Building Type" },
          { title: "Average Sales Price" },
          { title: "Total Units" }
        ]
      });
    } else {
      console.error("Element 'totalUnitsAvg' not found in the DOM.");
    }
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });