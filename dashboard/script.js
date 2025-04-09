fetch("http://localhost:5000/api/logs")
  .then(response => response.json())
  .then(data => {
    console.log("Fetched Data:", data); // Debugging line
    const urls = {};
    data.forEach(log => {
      urls[log.url] = (urls[log.url] || 0) + log.duration;
    });

    const labels = Object.keys(urls);
    const durations = Object.values(urls);
    console.log("Labels:", labels);
    console.log("Durations:", durations); // Debugging line

    new Chart(document.getElementById("chart"), {
      type: "pie",
      data: {
        labels: labels,
        datasets: [{
          data: durations,
          backgroundColor: ["red", "blue", "green", "orange", "purple"]
        }]
      }
    });
  })
  .catch(error => console.error("Error loading data:", error));
