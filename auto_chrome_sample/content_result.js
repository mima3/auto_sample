window.addEventListener("load", function() {
  let elems = document.getElementsByTagName('tr');
  let data = [];
  for (let i = 0; i < elems.length; ++i) {
    console.log(elems[i].innerText);
    data.push(elems[i].innerText);
  }
  chrome.runtime.sendMessage({
      data: data
  }, function (response) {
      console.dir(response);
  });  
}, false);
