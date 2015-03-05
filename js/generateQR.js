function getURL(){
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){displayURL(tabs);});
}

function displayURL(tabs)
{
	var current_url = tabs[0].url;
	var qrcode = new QRCode("qrcode", {
    text: current_url,
    width: 250,
    height: 250,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
	});
}

document.addEventListener('DOMContentLoaded', function(){getURL();});