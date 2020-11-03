console.log('Extension loaded') // TODO: Remove

chrome.browserAction.onClicked.addListener(tab => {

  chrome.tabs.insertCSS(tab.id, {
    file: 'styles/css/keyframes.css'
  })

  chrome.tabs.executeScript(tab.ib, {
    file: 'js/inject.js',
  })
})


//
// "content_scripts": [
//     {
//         "matches": [
//             "<all_urls>"
//         ],
//         "js": [
//             "src/inject/inject.js"
//         ],
//         "run_at": "document_end"
//     }
// ]
