chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
    let nameElem = document.getElementsByName('name');
    nameElem[0].value = '名前太郎';
    let mailElem = document.getElementsByName('mail');
    mailElem[0].value = 'test@co.jp';
    let commentElem = document.getElementsByName('comment');
    commentElem[0].value = '猫猫子猫\n犬犬子犬';
    // チェックボックス
    let chkElem = document.getElementsByName('q1[]');
    chkElem[0].click();
    chkElem[2].click();
    // ラジオボタン
    let radioElem = document.getElementsByName('men');
    radioElem[1].click();
    // 選択項目
    var itr = document.evaluate("//select[@name='osi[]']/option", document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );
    var node = itr.iterateNext();
    while(node) {
      if (node.textContent === '千鶴さん' || node.textContent === 'さおりん') {
        node.selected = true;
      }
      node = itr.iterateNext();
    }
    // ボタン押下
    // contents.jsでwindows.confirmを書き換えてもブラウザ側の処理に影響を与えない
    // そのため、window.confirmを書き換えるscritpをタグとして挿入する
    // 考え方は以下を参考
    // https://qiita.com/suin/items/5e1aa942e654bce442f7
    let scr = document.createElement("script");
    scr.setAttribute('type', 'text/javascript');
    scr.innerText = 'window.confirm = function () { return true; }';
    document.body.appendChild(scr); 
    setTimeout(function(){ 
      //ここでやってもブラウザ上のwindow.confirmは影響ない。
      var btnElem = document.evaluate("//input[@value='登録する']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      btnElem.singleNodeValue.click();
    }, 0);
  }
);