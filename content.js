console.log("Chrome ectension go");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendRequest) {
    console.log(message);

}