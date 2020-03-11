
function setup() {
    noCanvus();

    chrome.tabs.getCurrent(gotTab);

    function gotTab() {
        let message = "hello";
        let msg = {
            txt: "hello"
        }
        chrome.tabs.sendMessage(tab.id, msg);
    }
}




// function click(e) {
//     chrome.tabs.executeScript(null,
//         {
//             code: "console.log('hello)"
//         }
//     );
// }

// function facebookLiking() {
//     document.getElementsByClassName("hasLeftCol _2yq")[0].onscroll = function () {
//         var unlikePosts = document.getElementsByClassName('_6rk2 img');
//         var unlikePosts_length = unlikePosts.length;

//         console.log(unlikePosts_length);

//         if (unlikePosts_length > 5) {
//             document.getElementsByClassName('_6rk2 img')[0].click();

//             console.log("Liked");
//         }
//     };


//     const stop = setInterval(function () {
//         //     console.log("Auto Scrolling.");

//         window.scrollBy(0, 5);

//     }, 10)
// }