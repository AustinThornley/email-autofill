chrome.runtime.onConnect.addListener(function (port) {
  port.onMessage.addListener(function (msg) {
    if (port.name === "uiOps") {
      const idToQuery = msg.message;
      if (idToQuery) {
        port.postMessage({
          exists: true,
        });
      } else {
        port.postMessage({
          exists: false,
        });
      }
    }
  });
});