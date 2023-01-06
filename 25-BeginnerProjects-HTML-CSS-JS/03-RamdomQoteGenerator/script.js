function generate(){
	var quotes = {
	"- Albert Einstein"	: '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it&#39s beauty."',
	"- C.S. Lewis" : '"I was not born to be free---I was born to adore and obey."',
	"- Jenny Valentine" : '"Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free."'
	}

	var authors = Object.keys(quotes);
	var author = authors[Math.floor(Math.random() * authors.length)];

	var quote = quotes[author];

	document.getElementById("quote").innerHTML = quote;
	document.getElementById("author").innerHTML = author;
}