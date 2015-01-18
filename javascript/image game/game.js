var count = 0;
var prevDiv;
var countTile = 0;
var clicks = 0;
var totalSeconds = 0;
var flag = 0;

var createFunc = function(i){
  document.getElementById("tdid"+i).onclick = function(){unhide(String(i));};
};

var createRemovefunc = function(i){
	document.getElementById("tdid"+i).onclick = null;
};

var addClickEvent = function(){
	for (var i = 0; i < 36; i++) {
		createFunc(i);
	}
};

var removeClickEvent = function(){
	for (var i = 0; i < 36; i++) {
		createRemovefunc(i);
	}
};

var setTime = function(){
	var minutesLabel = document.getElementById("minutes");
	var secondsLabel = document.getElementById("seconds");
	totalSeconds++;
	secondsLabel.innerHTML = pad(totalSeconds%60);
	minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
};

var pad=function(val){
	var valString = val + "";
	if(valString.length < 2){
		return "0" + valString;
	}
	else{
		return valString;
	}
};

var startTimer = function(){
	xInt = setInterval(setTime, 1000);
};

var initializeImg = function(){
	var ar = new Array();
	for (var i = 0; i < 36; i++) {
		ar[i] = i;
	};
	ar.sort(function(){return Math.random()-0.5;});
	for (var i = 0; i < 36; i++) {
		if (ar[i]>17) {
			tmp=ar[i]-18;
		}
		else{
			tmp=ar[i];
		}
		document.getElementsByTagName('img')[i].style.visibility="hidden";
		document.getElementsByTagName('img')[i].src = "images\\image_"+tmp+".jpg";
	}
};

var stopTimer = function(){
	if (countTile < 18) {
		alert("You did not complete the game!!Please come again!!");
	}
	document.getElementById('start').style.display = "initial";
	clearInterval(xInt);
	document.getElementById("minutes").innerHTML = "00";
	document.getElementById("seconds").innerHTML = "00";	
	totalSeconds = 0;
	belowDiv.removeChild(stopButton);
	belowDiv.removeChild(resButton);
	flag = 0;		
	click = 0;
	removeClickEvent();
	initializeImg();
	document.getElementById("clickSpan").innerHTML = "0";
};

var pauseTimer = function(){
	if(stop != "yes"){
		clearInterval(xInt);
		resButton.innerHTML = "Resume";
		stop = "yes";	
		removeClickEvent();
	}
	else{
		startTimer();
		stop = "no";
		resButton.innerHTML = "Pause";
		addClickEvent();
	}	
};

var startGame = function(){
	document.getElementById('start').style.display="none";
	initializeImg();	
	addClickEvent();
	if(flag != 1){
		flag = 1;
		stopButton = document.createElement("Button");
		text = document.createTextNode("Stop");
		stopButton.appendChild(text);
		belowDiv = document.getElementById('below');
		belowDiv.appendChild(stopButton);		
		resButton = document.createElement("Button");
		text = document.createTextNode("Pause");
		resButton.appendChild(text);
		belowDiv = document.getElementById('below');
		belowDiv.appendChild(resButton);			
	}
	startTimer();
	stopButton.onclick = function(){
		stopTimer();
	};
	resButton.onclick = function(){
		pauseTimer();
	};
};

var unhide = function(divid){
	divid = String(divid);
	console.log(divid);
	clicks++;
	document.getElementById("clickSpan").innerHTML = clicks;
	var currDiv = "imgid" + divid;
	document.getElementById(currDiv).style.visibility = "visible";
	if(count == 0){
		prevDiv = currDiv;
		count++;
	}
	else if(count == 1){
		count = 0;
		src1 = document.getElementById(currDiv).src;
		src2 = document.getElementById(prevDiv).src;		
		if (src1 != src2) {
			setTimeout(function(){
				document.getElementById(currDiv).style.visibility = "hidden";
				document.getElementById(prevDiv).style.visibility = "hidden";
			},500);
		}
		else{
			countTile++;
			if (countTile == 18) {
				alert("WoooHooo You Won!!!\n Your Time : "+document.getElementById('minutes')+":"+document.getElementById('seconds'));
				stopTimer();
				countTile = 0;
			}
		}
	}
};

window.onload = function(){
	initializeImg();
}