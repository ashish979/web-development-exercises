var rorNames = [];
var jqueryNames = [];
var androidNames = [];

var addContent = function(id,name){
	var newId = "accordion_" + id;
	$("#" + newId).append("<div id=" + id + name + "><br/><span class='label'>" + name + "</span><textarea row='10' column='70' placeholder='Add ur content here'></textarea><br/><br/></div>");
};

var removeContent = function(id,name){
	var newId = id + name;
	$("#" + newId).remove();
};

$(function(){
	$("#accordion").accordion();
	$("#draggable li").draggable({
		helper:"clone"
	});
	$("#droppable ul").droppable({
		accept:"#draggable li",
		drop:function(event,ui){
				var text = ui.draggable.text();
				var dropID = $(this).attr("id");
				switch(dropID){
					case "ror":
						if(rorNames.indexOf(text) < 0){
							rorNames.push(text);
							$( "<li>" + text + "<span class='remove'><img src='cross.jpg'/></span></li>" ).appendTo( this );
							addContent(dropID,text);
						}
						break;
					case "jquery":
						if(jqueryNames.indexOf(text) < 0){
							jqueryNames.push(text);
							$( "<li>" + text + "<span class='remove'><img src='cross.jpg'/></span></li>" ).appendTo( this );
							addContent(dropID,text);
						}
						break;
					case "android":
						if(androidNames.indexOf(text) < 0){
							androidNames.push(text);
							$( "<li>" + text + "<span class='remove'><img src='cross.jpg'/></span></li>" ).appendTo( this );
							addContent(dropID,text);
						}
						break;
				}
				$('.remove').hide().click(
				function(){
					var id = $(this).parent().parent().attr("id");
					var name = $(this).parent().text();
					removeContent(id,name);
					switch(id){
						case "ror":
							rorNames = $.grep(rorNames,function(a){return (a !== name);});
							break;
						case "jquery":
							jqueryNames = $.grep(jqueryNames,function(a){return (a !== name);});
							break;
						case "android":
							androidNames = $.grep(androidNames,function(a){return (a !== name);});
							break;
					}
					$(this).parent().remove();
				});	
				$('#droppable ul li').hover(
				function(){
			        $(this).find('.remove').show();
			    },
			    function(){
			         $(this).find('.remove').hide();
			    });		
			}
	}).sortable({
			items:"li",
			cancel:"li",
			sort: function() {
	        $( this ).removeClass( "ui-state-default" );
	      }
		});

});








    
    