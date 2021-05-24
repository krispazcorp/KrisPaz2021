$('#proyectos1').on('click',function(){
	var posproyectos= $("#proyectos").offset().top-40;
	$('html,body').animate({scrollTop:posproyectos},600);
	
	$("#proyectos1").css("color","#fff")
	$("#nosotros1").css("color","#939699")
	$("#tienda1").css("color","#939699")
})

$('#nosotros1').on('click',function(){
	
	var posnosotros= $("#nosotros").offset().top-20;
	$('html,body').animate({scrollTop:posnosotros},600);
	$("#nosotros1").css("color","#fff")
	$("#proyectos1").css("color","#939699")
	$("#tienda1").css("color","#939699")
})

$('#tienda1').on('click',function(){
	var postienda= $("#tienda").offset().top;
	$('html,body').animate({scrollTop:postienda},600);
	$("#tienda1").css("color","#fff")
	$("#proyectos1").css("color","#939699")
	$("#nosotros1").css("color","#939699")
})