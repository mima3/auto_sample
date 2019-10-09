let startInput = document.getElementById('startInput');

startInput.onclick = function(element) {
  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "start"});
  });
};

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  alert(JSON.stringify(message));
});