$(document).ready(function(){
 	$(".navbar").on("click", function(){
 		$("nav ul").toggleClass("showing");
 	});
 });

 $(window).on("scroll", function(){
 	if($(window).scrollTop()) {
 		$('nav').addClass('black');
 		console.log("on scroll")
 	}
 	else {
 		$('nav').removeClass('black');
 	}
 })