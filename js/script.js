var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function onListItemClick(event) {
	event.target.classList.toggle("done");
}

/*NOTES
***classList property to access style!!!***
The Event object is automatically passed to all event handlers.
 If you add event handlers with addEventListener, you can choose the parameter name (like you did in handler). 
 But for code attached with the onclick attribute, you can only access the event object via the implicit
 variable event.
*/

function onDelete(event) {
	//event.target.deleteObject();
	this.parentNode.remove(); //need to actually remove the object not just delete from memory?
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

console.log(items.length);

for (var i = 0; i < items.length; i++)
{
	var item = items[i];
	item.addEventListener("click", onListItemClick);
	//document.createElement("button");
	var deleteButton = document.createElement("button");
	deleteButton.innerText = 'delete';
	item.appendChild(deleteButton);
	deleteButton.addEventListener('click', onDelete);
	console.log(item);
}

/*CANNOT CALL FOREACH ON HTMLCOLLECTION. ONLY ARRAYS
items.forEach.call(items[i]) {
	items[i].addEventListener("click", onListItemClick);
};*/
