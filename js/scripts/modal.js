$(document).on("ready", function(){
	$("#mostrar-modal").on("click", function(){
		$("#modal").addClass("mostrar-modal");
	});

	$("#cerrar-modal").on("click", function(){
		$("#modal").removeClass("mostrar-modal");
	});
})
