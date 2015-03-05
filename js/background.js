//this page is not in use, currently


//beta badge overlay 
chrome.browserAction.setBadgeText({text:"beta"});
chrome.browserAction.setBadgeBackgroundColor({color:"red"});

//context menu item (right-click)
//doesnt work for now, because of background sync issues.. 
//chrome.contextMenus.create({type: "normal", id: "qrmenu",title: "sleeqr", onclick: function(){alert(0);}});