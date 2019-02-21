document.addEventListener("DOMContentLoaded", function () {

var submenu = document.getElementById('submenu')
var nav = document.getElementsByClassName("link");
var sandwich = document.getElementById('hmt');
var header = document.getElementById('header');

for (i=0; i < nav.length; i++) {
	nav[i].onclick =  function(){
		submenu.style.display = 'none';
		sandwich.checked=false;
		header.style.minHeight = 'auto';
	}
  };
sandwich.onclick = function(){
	if (submenu.style.display != 'block'){
		submenu.style.display = 'block';
		header.style.minHeight = '100vh';
	}
	else{
		submenu.style.display = 'none';
		header.style.minHeight = 'auto';
	}
};





























});