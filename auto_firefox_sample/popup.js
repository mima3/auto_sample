let startInput = document.getElementById('startInput');

startInput.onclick = function(element) {
  browser.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "start"});
  });
};

browser.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log(message);
  alert(JSON.stringify(message));
});