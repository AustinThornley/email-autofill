console.log("background running");
chrome.browserAction.onClicked.addListener(setup);
let button = select('#message-btn');


function setup() {
		button.addEventListener('click', function() {
			noCanvas();
			let messageInput = select('#message-input');
			messageInput.input(sendText);

			function sendText() {
					let message = messageInput.value();
					chrome.tabs.query({
							active: true,
							currentWindow: true
					}, function(tabs) {
							chrome.tabs.sendMessage(tabs[0].id, message);
					});
			}
		});
}