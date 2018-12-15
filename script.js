var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var bodyColor=document.getElementById("gradient");
var css=document.querySelector("h3");


//console.log(color1);
//console.log(color2);
function setGradient(){
	bodyColor.style.background = 
	"linear-gradient(to right, " 
	+color1.value
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent=bodyColor.style.background+" HEX CODE "
	+color1.value +"  "+
	color2.value;
	/*console.log(color1.value + " " +color2.value);*/
}
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);