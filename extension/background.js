let activeTabId = null;
let startTime = null;

chrome.tabs.onActivated.addListener(activeInfo => {
  if (activeTabId !== null && startTime !== null) {
    const duration = (Date.now() - startTime) / 1000;
    chrome.storage.local.get({ logs: [] }, data => {
      data.logs.push({ url: activeTabId, duration });
      chrome.storage.local.set({ logs: data.logs });
    });
  }

  chrome.tabs.get(activeInfo.tabId, tab => {
    activeTabId = tab.url;
    startTime = Date.now();
  });
});
