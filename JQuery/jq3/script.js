var colorArray = new Array();
var brandArray = new Array();
var sold = "no";

var hideUnhide = function(){
	$(".A,.B,.C,.D").hide();
	$(".all").prop("checked",false);
/*----------conditions to hide and unhide----------------*/
	if(sold === "yes"){
		if(colorArray.length > 0){
			if(brandArray.length > 0){
				for (var i = 0; i < colorArray.length; i++) {
					for (var j = 0; j < brandArray.length; j++) {
						$(".sold." + colorArray[i] + "." + brandArray[j]).show();
					}
				}
			}
			else{
				for (var j = 0; j < colorArray.length; j++) {
					$(".sold." + colorArray[j]).show();
				}
			}
		}
		else{
			if(brandArray.length > 0){
				for (var j = 0; j < brandArray.length; j++) {
					$(".sold." + brandArray[j]).show();
				}
			}
			else{
				$(".sold").show();
			}
		}
	}
	else{
		if(colorArray.length > 0){
			if(brandArray.length > 0){
				for (var i = 0; i < colorArray.length; i++) {
					for (var j = 0; j < brandArray.length; j++) {
						$("." + colorArray[i] + "." + brandArray[j]).show();
					}
				}
			}
			else{
				for (var j = 0; j < colorArray.length; j++) {
					$("." + colorArray[j]).show();
				}
			}
		}
		else{
			if(brandArray.length > 0){
				for (var j = 0; j < brandArray.length; j++) {
					$("." + brandArray[j]).show();
				}
			}
		}
	}
};

$(document).ready(function(){	
	$(".all").prop("checked",true);
	$(".all").click(function(){
		if($(this).is(":checked")){
			$("input:not(.all)").prop("checked",false);
			$(".A,.B,.C,.D").show();
			colorArray = [];
			brandArray = [];
			sold = "no";
		}
		else{
			$(".A,.B,.C,.D").hide();
		}
	});
	$('input:not(.all)').click(function(){
		if($(this).is(":checked")){
			if($(this).attr('class') == "color"){
				colorArray.push($(this).attr("name"));
			}
			else if($(this).attr('class') == "brand"){
				brandArray.push($(this).attr("name"));
			}
			else if($(this).attr('class') == "available"){
				sold = "yes";
			}	
		}
		else{
			if($(this).attr('class') == "color"){
				colorArray.splice(colorArray.indexOf($(this).attr("name")),1);
			}
			else if($(this).attr('class') == "brand"){
				brandArray.splice(brandArray.indexOf($(this).attr("name")),1);
			}	
			else if($(this).attr('class') == "available"){
				sold = "no";
			}
		}
		hideUnhide();
	});	
});
 	