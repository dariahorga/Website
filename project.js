function style1(elementId) {
	var element1 = document.getElementById(elementId);
	element1.style.border = "7px solid black";

}
function style2(elementTag) {
	var elements = document.getElementsByTagName(elementTag);
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		element.style.border = "7px solid grey";
	}
}


window.onload = function ()
{
	style1("description");
	style2("nav");

}