document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get("logs", data => {
      const logList = document.getElementById("logList");
      data.logs.forEach(log => {
        let li = document.createElement("li");
        li.textContent = `${log.url} - ${log.duration}s`;
        logList.appendChild(li);
      });
    });
  });
  