// total units avg price table
fetch("../data/totalUnits_avgPrice.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Terjadi Kesalahan Respon Jaringan");
    }
    return response.json();
  })
  .then((data) => {

    const totalUnitsAvg = document.getElementById("totalUnitsAvg");
    
    if (totalUnitsAvg) {
      const tableData = data.map((item) => [
        item.LOCATION,
        item["BUILDING TYPE"],
        `$${Number(item["AVERAGE SALES PRICE"]).toFixed(0)}`,
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

    const totalUnitsPrice = document.getElementById("totalUnitsPrice");
    
    if (totalUnitsPrice) {
      const tableData = data.map((item) => [
        item.LOCATION,
        item["BUILDING TYPE"],
        item["PRICE RANGE CATEGORY"],
        formatNumber(item["UNIT PRACE RANGE"].toString()),
      ]);

      const table = $(totalUnitsPrice).DataTable({
        data: tableData,
        columns: [
          { title: "Location" },
          { title: "Building Type" },
          { title: "Price Range Category" },
          { title: "Total Units" }
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

    const unitBuildType = document.getElementById("unitBuildType");
    
    if (unitBuildType) {
      const tableData = data.map((item) => [
        item.LOCATION,
        item["BUILDING TYPE"],
        item["LAND SQUARE FEET CATEGORY"],
        formatNumber(item["AVERAGE SALES PRICE"]),
        parseInt(formatNumber(item["TOTAL UNITS"].toString())).toFixed(0),
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

  function formatNumber(text) {
    const replaceString = /["'\\]/g;
    return text.replace(replaceString, '')
  }