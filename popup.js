let messageInput = document.getElementsByClassName('message-input')[0];
let updateMessageBtn = document.getElementById('message-btn');

updateMessageBtn.addEventListener('click', async(messageInput) => {
		// Query tab
    let queryOptions = { active: true, currentWindow: true };
    let tabs = await chrome.tabs.query(queryOptions);

    // Open up connection
    const port = chrome.tabs.connect(tabs[0].id, {
        name: "uiOps",
    });

		port.postMessage({
			message: messageInput.value
		});

		    port.onMessage.addListener(function(msg) {
        if (msg.exists) {
            alert('Exists');
        } else {
            alert("Doesn't exist");
        }
    })
});