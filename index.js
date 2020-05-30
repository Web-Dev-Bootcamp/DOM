var random1 = Math.floor(Math.random() * 6) + 1;
var randomImg1 = "images/dice" + random1 + ".png";

var random2 = Math.floor(Math.random() * 6) + 1;
var randomImg2 = "images/dice" + random2 + ".png";

document.querySelector(".img1").setAttribute("src", randomImg1);
document.querySelector(".img2").setAttribute("src", randomImg2);

if(random1 > random2)
	document.querySelector("h1").textContent = "🚩 Player 1 Wins !";

else if(random1 < random2)
	document.querySelector("h1").textContent = "🚩 Player 2 Wins !";

else
	document.querySelector("h1").textContent = "🏳 It's a draw !";

