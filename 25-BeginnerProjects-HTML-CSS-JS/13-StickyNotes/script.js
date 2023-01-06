
var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];

var checkIcon = document.getElementById("check-icon")
var xIcon = document.getElementById("x-icon")
var i = 0;

xIcon.addEventListener("click", function(){
	typeNote()
})

checkIcon.addEventListener("click", function(){
	createNote()
})

function typeNote(){
	if (container3.style.display == "none")
		container3.style.display = "block";
	else {
		container3.style.display = "none";
	}

}

function createNote() {
	var noteText = document.getElementById("note-text").value;
	var node0 = document.createElement("div");
	var node1 = document.createElement("h1");

	node1.innerHTML = noteText;
	node1.setAttribute("style", "width: 250px;\
								 height:250px;\
	 							 font-size:26px;\
								 margin-top: 10px;\
								 padding:25px;\
								 overflow:hidden;\
								 box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)");
								 
	node1.style.background = color();
	node1.style.transform = rotate();
	node1.style;emargin = margin();

	node0.appendChild(node1);
	container2.insertAdjacentElement("beforeend", node0);

	node0.addEventListener("mouseenter", function(){
		node0.style.transform= "scale(1.1)";
	});

	node0.addEventListener("mouseleave", function(){
		node0.style.transform= "scale(1.0)";
	});

	node0.addEventListener("dblclick", function(){
		node0.remove(); 
	});

	document.getElementById("note-text").value = "";


}


function margin() {
	var random_margin = [
	"-5xp",
	"1xp",
	"5xp",
	"10xp",
	"15xp",
	"20xp" ];

	return random_margin[Math.floor(Math.random() * random_margin.length)];

}

function rotate() {
	var random_rotate= [
		"rotate(3deg)",
		"rotate(1deg)",
		"rotate(-1deg)",
		"rotate(-3deg)",
		"rotate(-5deg)",
		"rotate(-10deg)"
	];
	
	return random_rotate[Math.floor(Math.random() * random_rotate.length)];

}

function color() {
	var random_color = [
		"#c2ff3d",
		"#ff3de8",
		"#3dc2ff",
		"#04e022",
		"#bc83e6",
		"#ebb328"
	];

	if (i > random_color.length - 1) {
		i = 0;
	}
	return random_color[i++];
}


const stickNotes = document.getElementsByClassName('stickNotes')[0];

input.addEventListener("keydown", function(event) {
	if (event.key == "Enter")
		addItem();
})

function addItem() {
	var divParent = document.createElement("div");
	var divChild = document.createElement("div");
	var divChild2 = document.createElement("div");
	var checkIcon = document.createElement("i");
	var trashIcon = document.createElement("i");
	var input = document.createElement("input");

	divParent.className = "note";

	checkIcon.className = "fas fa-check-square";
	checkIcon.style.color = "lightgray ";
	checkIcon.addEventListener ("click", function(){
		checkIcon.style.color = "limegreen";
	})
	divChild.appendChild (checkIcon);

	trashIcon.className = "fas fa-trash";
	trashIcon.style.color = "darkgray";
	trashIcon.addEventListener ("click", function(){
		divParent.remove();
	})
	divChild.appendChild(trashIcon);
	divParent.appendChild(divChild);

	input.className = "uner-input";
	divChild2.appendChild(input);
	divParent.appendChild(divChild2);

	stickNotes.appendChild(divParent);

	input.value = '';
}






