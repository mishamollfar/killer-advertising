chrome.runtime.onMessage.addListener(async(request) => {
    if (request.greeting === 'start_killer') {
        init();
    }
});

function init() {
    document.addEventListener('DOMContentLoaded', () => {
        let advertisingElementArray = document.querySelectorAll('iframe');
        if (advertisingElementArray.length) {
            console.log('advertisingElementArray', advertisingElementArray);
            delete advertisingElementArray;
        }
    })
}
