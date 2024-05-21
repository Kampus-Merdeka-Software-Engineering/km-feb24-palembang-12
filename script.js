// split navbar content
document.addEventListener("DOMContentLoaded", function() {
  fetch('./Component/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
    });
});