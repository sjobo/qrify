document.addEventListener('DOMContentLoaded', function(){
	getURL();
	//document.getElementById('shareOptions').style.display="none";
	document.getElementById('share').addEventListener('click', function(){
		$('#shareOptions').slideToggle();
		$('#share').slideToggle();});
	
	// event listeners for share buttons
	
	// whatsapp
	document.getElementById('whatsapp').addEventListener('click', function(){
		qrcode.clear();
		document.getElementById("qrcode").innerHTML="";
		getURL('whatsapp',document.getElementById('recipient').value);});
	// browser
	document.getElementById('browser').addEventListener('click', function(){
		qrcode.clear();
		document.getElementById("qrcode").innerHTML="";
		getURL();});
	// email
	document.getElementById('email').addEventListener('click', function(){
		qrcode.clear();
		document.getElementById("qrcode").innerHTML="";
		getURL('email',document.getElementById('recipient').value);});
	// sms
		document.getElementById('sms').addEventListener('click', function(){
		qrcode.clear();
		document.getElementById("qrcode").innerHTML="";
		getURL('sms',document.getElementById('recipient').value);});
});
