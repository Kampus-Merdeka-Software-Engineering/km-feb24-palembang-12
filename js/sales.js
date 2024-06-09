// trend sales 2016-2017
fetch("../data/trend_sales_2016-2017.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Terjadi Kesalahan Respon Jaringan");
    }
    return response.json();
  })
  .then((data) => {
    const trend = document.getElementById("trendSales");
    const month = data.map((item) => item.SALE_DATE);
    const unit = data.map((item) => item.Total_Units);
    const sales = data.map((item) => item.Total_Sale_Price);
    
    new Chart(trend, {
      type: "line",
      data: {
        labels: month,
        datasets: [
          {
            label: "Total Units",
            data: unit,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            yAxisID: "y-axis-1",
          },
          {
            label: "Total Sales",
            data: sales,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            yAxisID: "y-axis-2",
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              id: "y-axis-1",
              type: "linear",
              position: "left",
              ticks: {
                beginAtZero: true,
              },
            },
            {
              id: "y-axis-2",
              type: "linear",
              position: "right",

              ticks: {
                beginAtZero: true,
                callback: function (value, index, values) {
                  return "$" + value.toFixed(2);
                },
              },
              gridLines: {
                drawOnChartArea: false,
              },
            },
          ],
        },
        title: {
          display: true,
          text: "TREND SALES 2016 - 2017",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
      },
    });
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

// total sales 2018 chart
fetch("../data/sales_target_2018.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Terjadi Kesalahan Respon Jaringan");
    }
    return response.json();
  })
  .then((data) => {
    const locations = data.map((item) => item.LOCATION);
    const totalSales2016 = data.map((item) => item["TOTAL_SALES_2016"]);
    const totalSales2017 = data.map((item) => item["TOTAL_SALES_2017"]);
    const salesTarget2018 = data.map((item) => item["SALES_TARGET_2018"]);
    const salestarget = document.getElementById("salesTarget");

    if (salestarget) {
      new Chart(salestarget, {
        type: "bar",
        data: {
          labels: locations,
          datasets: [
            {
              label: "Total Sales 2016",
              data: totalSales2016,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 1,
            },
            {
              label: "Total Sales 2017",
              data: totalSales2017,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
            {
              label: "Sales Target 2018",
              data: salesTarget2018,
              backgroundColor: "rgba(255, 206, 86, 0.2)",
              borderColor: "rgba(255, 206, 86, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  callback: function (value) {
                    return value.toLocaleString();
                  },
                },
              },
            ],
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem, chart) {
                let datasetLabel =
                  chart.datasets[tooltipItem.datasetIndex].label || "";
                return (
                  datasetLabel + ": " + tooltipItem.yLabel.toLocaleString()
                );
              },
            },
          },
        },
      });
    } else {
      console.error("Element 'salesTarget' not found in the DOM.");
    }
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
