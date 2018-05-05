chrome.runtime.onInstalled.addListener(details => {
    // console.log('Extension was installed!', details.previousVersion);
    // sendingMessage();
});

chrome.browserAction.onClicked.addListener(() => {
    sendingMessage();
});

function sendingMessage() {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {greeting: 'start_killer'}, () => {
      });
    });
  }