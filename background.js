console.log("Background running");

chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked(tab) {
    //console.log("button Clicked !");
    console.log(tab);

    let msg = {
        txt: "Hello"
    }
    chrome.tabs.sendMessage(tab.id,msg);


}