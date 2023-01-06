var count = 0;

messageInput.addEventListener("keydown", function(event){
	if (event.key == "Enter")
		getMessage();
})

function changeCount(num){
	count += num;
	document.getElementById("count").innerHTML=count;
}