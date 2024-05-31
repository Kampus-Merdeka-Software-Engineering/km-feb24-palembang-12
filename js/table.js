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
    const avgSalesPrice = data.map((item) => Number(item["AVERAGE SALES PRICE"]).toFixed(2));
    const totalUnits = data.map((item) => item["TOTAL UNITS"]);
    const totalUnitsAvg = document.getElementById("totalUnitsAvg");
    
    if (totalUnitsAvg) {
      const tableData = data.map((item) => [
        item.LOCATION,
        item["BUILDING TYPE"],
        item["AVERAGE SALES PRICE"],
        item["TOTAL UNITS"],
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


// total units price cat table
fetch("../data/totalUnits_price.json")
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
    const priceRange = data.map((item) => item["PRICE RANGE CATEGORY"]);
    const unitPrice = data.map((item) => item["UNIT PRACE RANGE"]);
    const totalUnitsPrice = document.getElementById("totalUnitsPrice");
    
    if (totalUnitsPrice) {
      const tableData = data.map((item) => [
        item.LOCATION,
        item["BUILDING TYPE"],
        item["PRICE RANGE CATEGORY"],
        item["UNIT PRACE RANGE"],
      ]);

      const table = $(totalUnitsPrice).DataTable({
        data: tableData,
        columns: [
          { title: "Location" },
          { title: "Building Type" },
          { title: "Price Range Category" },
          { title: "Unit Price Range" }
        ]
      });
    } else {
      console.error("Element 'totalUnitsPrice' not found in the DOM.");
    }
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });


// units by build type table
fetch("../data/unit_by_buildType.json")
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
    const squareFeet = data.map((item) => item["LAND SQUARE FEET CATEGORY"]);
    const avgSalesPrice = data.map((item) => Number(item["AVERAGE SALES PRICE"]).toFixed(2));
    const totalUnits = data.map((item) => item["TOTAL UNITS"]);
    const unitBuildType = document.getElementById("unitBuildType");
    
    if (unitBuildType) {
      const tableData = data.map((item) => [
        item.LOCATION,
        item["BUILDING TYPE"],
        item["LAND SQUARE FEET CATEGORY"],
        item["AVERAGE SALES PRICE"],
        item["TOTAL UNITS"],
      ]);

      const table = $(unitBuildType).DataTable({
        data: tableData,
        columns: [
          { title: "Location" },
          { title: "Building Type" },
          { title: "Land Square Feet Category" },
          { title: "Average Sales Price" },
          { title: "Total Units" }
        ]
      });
    } else {
      console.error("Element 'unitBuildType' not found in the DOM.");
    }
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });