
window.addEventListener('load', calculateTime());

function calculateTime(){
	var date = new Date();
	console.log("Date:" + date);
	var dayNumber = date.getDay();
	var hour = date.getHours();
	console.log("hour: ", hour);
	var minute = date.getMinutes();
	var second = date.getSeconds();
	var ampm = hour >=12? 'PM' : 'AM';
	var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];


	hour = hour % 12;
	hour = hour ? hour : '12';
	hour = hour < 10 ? '0' + hour : hour;
	minute = minute < 10 ? "0"+minute: minute;
	second = second < 10 ? "0"+second: second;
	
	document.getElementById("day").innerHTML=dayNames[dayNumber];
	document.getElementById("hour").innerHTML=hour;
	document.getElementById("minute").innerHTML=minute;
	document.getElementById("second").innerHTML=second;
	document.getElementById("ampm").innerHTML=ampm;
//	console.log(hour);
	setTimeout(calculateTime, 200);
}

//calculateTime();