fetch("../data/residential_commercial_unit.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Terjadi kesalahan respon jaringan");
    }
    return response.json();
  })
  .then((data) => {
    const ctx = document.getElementById("resdCommUnit");

    const location = data.map((item) => item.LOCATION);
    const commUnit = data.map((item) => item["COMMERCIAL UNIT"]);
    const resdUnit = data.map((item) => item["RESIDENTIAL UNIT"]);

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: location,
        datasets: [
          {
            label: "RESIDENTIAL UNIT",
            data: resdUnit,
            backgroundColor: "hsla(220, 100%, 50%, 1)",
            borderWidth: 1,
          },
          {
            label: "COMMERCIAL UNIT",
            data: commUnit,
            backgroundColor: "hsla(165, 100%, 50%, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            stacked: true,
          },
          x: {
            beginAtZero: true,
            stacked: true,
          },
        },
      },
    });
  });

  // link to team section
const button = document.getElementById('tableSales');
button.addEventListener('click', function() {
    window.location.href = 'table.html';
});
