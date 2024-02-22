document.addEventListener('DOMContentLoaded', function () {
  fetch('your_backend_api_endpoint_here')
    .then((response) => response.text())
    .then((data) => {
      // Assuming data is the HTML content received from the backend
      document.getElementById('dynamicContent').innerHTML = data;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
});
