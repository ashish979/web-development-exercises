var current;

var activateAccordion = function(id,i){
	$("#" + id).accordion("option","active",i);
};

var initialize = function(){
	if(current >= 0 && current <= 3){
		activateAccordion("menu",0);
		if(current == 2 || current == 3){
			activateAccordion("submenu",0);
		}
	}
	else if(current >= 4 && current <= 6){
		activateAccordion("menu",1);
	}
	else if(current>6){
		activateAccordion("menu",2);
	}
};

$(document).ready(function(){
	if(window.location.href.indexOf('=')<0)
		current=-2;
	else
		current=window.location.href.slice(window.location.href.indexOf('=') + 1);
	$("#menu").accordion({
	});
	$("#submenu").accordion({
		collapsible: true,
		active:false,
	});
	initialize();
	$("#"+current).attr("class","ui-selected");
	
	$("#selectable0,#selectable1,#selectable2,#selectable3").selectable({
		start:function(){
			$(".ui-selected").removeClass('ui-selected');
		},
		selected:function(){
			current=$(".ui-selected").attr("id");
			window.open("file:///home/ashish/exercises/JQuery/jq2/index.html?current="+current);
		}
	});
	
});
