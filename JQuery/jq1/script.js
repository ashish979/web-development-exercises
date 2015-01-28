$(function(){
	$("#draggable td").draggable({
		helper:"clone",
		cursor:"crosshair",
		connectToSortable:".sortable",
	});
	/*
	$("#droppable").droppable({
		accept:"#draggable li",
		drop:function(){
			$( "<li></li>" ).text( ui.draggable.text() ).appendTo( this );
		}
	}).sortable({
		items:"li"
	});*/
	$(".sortable").sortable({
		connectWith:"tr",
		//receive: function (event, ui) { // add this handler
        //ui.item.remove(); // remove original item
    });
    $("#accordion").accordion();
});