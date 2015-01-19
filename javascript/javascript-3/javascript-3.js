var add = function(){
	var elem = document.getElementById('country');
	var index = elem.selectedIndex;
	var value = elem[index].innerHTML;
	var newElem = document.createElement("option");
	newElem.innerHTML = value;
	document.getElementById("toMove").appendChild(newElem);
	console.log(value);
	elem.removeChild(elem[index]);
	newElem.ondblclick = function(){
		removeC();
	};
};

var removeC = function(){
	var elem = document.getElementById('toMove');
	var index = elem.selectedIndex;
	var value = elem[index].innerHTML;
	var newElem = document.createElement("option");
	newElem.innerHTML = value;
	document.getElementById("country").appendChild(newElem);
	console.log(value);
	elem.removeChild(elem[index]);
	newElem.ondblclick = function(){
		add();
	};
};