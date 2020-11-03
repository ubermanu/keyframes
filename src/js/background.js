console.log('Extension loaded') // TODO: Remove

chrome.browserAction.onClicked.addListener(function(tab) {
  // for the current tab, inject the "inject.js" file & execute it

  chrome.tabs.executeScript(tab.ib, {
    file: './inject/ui.js',
  })

  chrome.tabs.executeScript(tab.ib, {
    file: './inject/functions.js',
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
