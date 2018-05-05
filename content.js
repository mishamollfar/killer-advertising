chrome.runtime.onMessage.addListener(async(request) => {
    if (request.greeting === 'start_killer') {
        removeIframeElement();
        removeDivWithAttibuteInjectable();
    }
});

function removeIframeElement() {
    let advertisingElementArray = document.querySelectorAll('iframe');
    if (advertisingElementArray.length) {
        console.log('advertisingElementArray', advertisingElementArray);
        advertisingElementArray.forEach(key => {
            key.remove();
        })
        delete advertisingElementArray;
    }
}

function removeDivWithAttibuteInjectable() {
    let elements = document.querySelectorAll('div[injected="true"]');
    if (elements.length) {
        console.log('removeDivWithAttibuteInjectable', elements);
        elements.forEach(key => {
            key.remove();
        })
        delete elements;
    }
}