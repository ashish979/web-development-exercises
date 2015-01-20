var count = 3;
var deleteA = function(buttonId){
	var parent = document.getElementById("formTable");
	var child = document.getElementById("tr" + buttonId);
	parent.removeChild(child);
};

var editA  =  function(buttonId){
	var input1 = document.getElementById("name" + buttonId);
	var input2 = document.getElementById("email" + buttonId);
	var input3 = document.getElementById('button' + buttonId);
	var edit = document.getElementById("edit" + buttonId);
	var dash = document.getElementById("dash" + buttonId);
	var del = document.getElementById("delete" + buttonId);
	input1.disabled = false;
	input2.disabled = false;
	input1.style.border = "1px solid gray";
	input2.style.border = "1px solid gray";
	edit.style.display = "none";
	dash.style.display = "none";
	del.style.display = "none";	
	input3.innerHTML = "Update";
	input3.style.display = "initial";
};

var save  =  function(buttonId){
	var buttonId = String(buttonId);
	var input1 = document.getElementById("name" + buttonId);
	var input2 = document.getElementById("email" + buttonId);
	var input3 = document.getElementById('button' + buttonId);
	var edit = document.getElementById("edit" + buttonId);
	var dash = document.getElementById("dash" + buttonId);
	var del = document.getElementById("delete" + buttonId);
	input1.disabled = true;
	input2.disabled = true;
	input1.style.border = 0;
	input1.style.backgroundColor = "white";
	input2.style.border = 0;
	input2.style.backgroundColor = "white";
	input3.style.display = "none";
	edit.style.display = "initial";
	dash.style.display = "initial";
	del.style.display = "initial";
};

var addRow  =  function(){
	var buttonId = count;
	var row = document.createElement("tr");
	var input1 = document.createElement("input");
	var input2 = document.createElement("input");
	var input3 = document.createElement("button");
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");
	var text = document.createTextNode("Save");
	var edit = document.createElement("a");
	var dash = document.createElement("span");
	var del = document.createElement("a");
	document.getElementById("formTable").appendChild(row);
	row.appendChild(td1);
	row.appendChild(td2);
	row.appendChild(td3);
	td1.appendChild(input1);
	td2.appendChild(input2);
	td3.appendChild(input3);
	td3.appendChild(edit);
	td3.appendChild(dash);
	td3.appendChild(del);
	dash.innerHTML = "/";
	edit.innerHTML = "Edit";
	del.innerHTML = "Delete";
	edit.setAttribute("href","#");
	del.setAttribute("href","#");	
	edit.setAttribute("id","edit" + buttonId);
	del.setAttribute("id","delete" + buttonId);
	dash.setAttribute("id","dash" + buttonId);
	row.setAttribute("id","tr" + buttonId);
	input3.appendChild(text);
	input1.setAttribute("type","text");
	input2.setAttribute("type","email");
	input1.setAttribute("id","name" + buttonId);
	input2.setAttribute("id","email" + buttonId);	
	input3.onclick = function(){
		save(buttonId);
	};
	edit.onclick = function(){
		editA(buttonId);
	}
	del.onclick = function(){
		deleteA(buttonId);
	}
	input3.setAttribute("id","button" + buttonId);
	count++ ;
};