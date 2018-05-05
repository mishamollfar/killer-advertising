chrome.runtime.onMessage.addListener(async(request) => {
    if (request.greeting === 'start_killer') {
        init();
    }
});

function init() {
    console.log('killer advertising content script');
}
