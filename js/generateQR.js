function getURL(){
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){displayURL(tabs[0].url);});
}

function displayURL(url)
{
	if (url == "homepage"){
		var current_url = "http://sjobo.github.com/sleeqr";}
	else{
		var current_url = url;}
	var qrcode = new QRCode("qrcode", {
    text: current_url,
    width: 250,
    height: 250,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
	});
}