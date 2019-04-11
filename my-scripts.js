// store data
var myList = (JSON.parse(localStorage.getItem("myData")) || [])

// create items to add to the database

function createItem() {
	var newItem = {text: window.prompt ("New List Item"), style:"none"}
	myList.push(newItem)
	localStorage.setItem("myData",JSON.stringify(myList))
	printItem(newItem)

}

// Print items
function printItem(item) {
	var p = document.createElement ("p")
	p.innerHTML = item.text
	p.className = item.style 
	p.onclick = function() {
		this.className = item.style = (this.className== "none") ? "strike" : "invisible"
		localStorage.setItem("myData",JSON.stringify(myList))
	}
	document.getElementById("myDiv").appendChild(p) 
}

// loop and print list
for (x=0; x < myList.length; x++) {printItem(myList[x])}