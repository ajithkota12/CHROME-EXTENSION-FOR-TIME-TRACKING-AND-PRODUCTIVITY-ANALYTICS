document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:5000/api/logs")  // Fetch data from backend
      .then(response => response.json())
      .then(data => {
        console.log("Fetched Data:", data); // Debugging: Log fetched data
  
        if (!data || data.length === 0) {
          console.error("No data received from backend!");
          return;
        }
  
        const urls = {};
        data.forEach(log => {
          urls[log.url] = (urls[log.url] || 0) + log.duration;
        });
  
        const labels = Object.keys(urls);
        const durations = Object.values(urls);
  
        console.log("Labels:", labels);
        console.log("Durations:", durations);
  
        // Create a Pie Chart
        const ctx = document.getElementById("chart").getContext("2d");
        new Chart(ctx, {
          type: "pie",
          data: {
            labels: labels,
            datasets: [{
              label: "Time Spent (minutes)",
              data: durations,
              backgroundColor: [
                "#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800", "#9C27B0"
              ],
              hoverOffset: 5
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "top"
              }
            }
          }
        });
      })
      .catch(error => console.error("Error loading data:", error));
  });
  