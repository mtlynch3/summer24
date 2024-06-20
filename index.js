let ol = document.querySelector('ol');

function addItem() {
	let li = document.createElement('li');
	let text = document.createTextNode("New hello");
	li.appendChild(text);
	ol.appendChild(li);
}

function deleteItem() {
	ol.removeChild(ol.lastElementChild);
}