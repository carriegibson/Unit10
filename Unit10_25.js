window.onload = function () {
	var backward = function () {
	var string = document.getElementById("string");
	document.getElementById("result").innerHTML = return string.split('').reverse().join('');
	}
	document.getElementById("reverse").onclick = backward ();
};
