function getURL(shareService, recipient){
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){displayURL(tabs[0].url, shareService, recipient);});
}

var qrcode;

function displayURL(url, shareService, recipient)
{
	var actionURL;
	switch (shareService){
	case 'whatsapp':
		actionURL = "whatsapp://send?text="+url;
		break;
	case 'email':
		actionURL = "mailto:"+recipient+"?body="+url;
		break;
	case 'sms':
		actionURL = "sms:"+recipient+"?body="+url;
		break;
	default:
		actionURL = url;
		}
	qrcode = new QRCode("qrcode", {
    text: actionURL,
    width: 250,
    height: 250,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
	});
}