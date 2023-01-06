

const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const questionInput = document.getElementById("question");
const answerInput   = document.getElementById ("answer");

// if the array doesn't exist, create a new one.
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

contentArray.array.forEach( divMaker);
function divMaker(text) {
	var div =document.createElement("div");
	var h2_question = document.createElement("h2");
	var h2_answer = document.createElement("h2");

	div.className = 'flashcard';
	h2_question.setAttribute('style', "border-top:1px; solid red; padding: 15px; margin-top:30px");
	h2_question.innerHTML = text.my_question;

	h2_answer.setAttribute('style', "text-align:center; display:none; color:red");
	h2_answer.innerHTML = text.my_answer;

	div.appendChild(h2_question)
	div.appendChild(h2_answer);

	div.addEventListener("click", function () {
		if(h2_answer.style.display == "none")
			h2_answer.style.display = "block";			
		else 
			h2_answer.style.display = "none";
	})

	flashcards.appendChild(div);
}

function addFlashcard(){
	var flashcard_info ={ 
		'my_question': questionInput.value, 
		'my_answer': answerInput.value 
	}

	contentArray.push(flashcard_info);
	localStorage.setItem('items', JSON.stringify(contentArray));
	divMaker(contentArray[contentArray.length -1]);
	questionInput.value = '';
	answerInput.value = '';
}

function delFlashcards(){
	localStorage.clear();
	flashcards.innerHTML = '';
	contentArray = [];
}

function showCreateCardBox(){
	createBox.style.display = "block";
}

function hideCreateBox() {
	createBox.style.display = "none";
}


pencil.addEventListener("click", function(){
	allItems.innerHTML="";}
)

userInput.addEventListener("keydown", function(event){
	if (event.key == "Enter") {
		addItem();
	}
})

function addItem(){
	var h2 = document.createElement("h2");
	h2.innerHTML = "- " + userInput.value;

	h2.addEventListener("click", function(){
		h2.style.textDecoration = "line-through";
	})

	allItems.insertAdjacentElement("beforeend", h2);

	userInput.value="";
}

function press(num) {
	expression += num;
	userInput.value= expression;
}

function equal() {
	if (expression != '') {
		userInput.value = eval (expression);
	}
	expression = '';
}

function erase() {
	expression = '';
	userInput.value = expression;
}