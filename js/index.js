function ide() {
		// body...
	document.getElementById('logo').style.visibility="visible";
	document.getElementById('about').style.visibility="hidden";
	document.getElementById('work').style.visibility="hidden";
	document.getElementById('port').style.visibility="hidden";
	document.getElementById('contact').style.visibility="hidden";
}



function about() {
		// body...
	document.getElementById('logo').style.visibility="hidden";
	document.getElementById('about').style.visibility="visible";
	document.getElementById('work').style.visibility="hidden";
	document.getElementById('port').style.visibility="hidden";
	document.getElementById('contact').style.visibility="hidden";
	
}

function work() {
		// body...
	document.getElementById('logo').style.visibility="hidden";
	document.getElementById('about').style.visibility="hidden";
	document.getElementById('work').style.visibility="visible";
	document.getElementById('port').style.visibility="hidden";
	document.getElementById('contact').style.visibility="hidden";
	
}



function contact() {
		// body...
	document.getElementById('logo').style.visibility="hidden";
	document.getElementById('about').style.visibility="hidden";
	document.getElementById('work').style.visibility="hidden";
	document.getElementById('port').style.visibility="hidden";
	document.getElementById('contact').style.visibility="visible";
	
}

$('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
    $(this).parents('.navbar-collapse').collapse('hide');
});

$('.carousel').carousel({
  interval: 250 * 10
});

