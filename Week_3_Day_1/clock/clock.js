function updateClock(){
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();

	if (hours < 10){
		hours = "0" + hours;
	}
	if (minutes < 10){
		minutes = "0" + minutes;
	}
	if (seconds < 10){
		seconds = "0" + seconds;
	}

	var elem = document.getElementById('clock');
	elem.innerHTML = hours + ":" + minutes + ":" + seconds;

	var color = document.body.style.backgroundColor = "blue";
	var colors = '#'+h+m+s;
	//$("div.backround").css("background-color", color );
	//$("p#hex").text(color);


}


$(document).ready(function(){
	setInterval(updateClock, 500);
});

