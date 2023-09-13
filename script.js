//your code here
function text() {
	let textname = document.getElementById("evaluatedText").value;
	let length=textname.length;
	let count = document.getElementById("letterCount");
	count.textContent = length;
}