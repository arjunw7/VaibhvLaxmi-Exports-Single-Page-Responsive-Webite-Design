

$(document).ready(function(){
	jQuery(window).load(function() {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(1000).fadeOut(500);
	});

	(function($) {
		"use strict";
		function count($this){
		var current = parseInt($this.html(), 10);
		current = current + 1; /* Where 50 is increment */	
		$this.html(++current);
			if(current > $this.data('count')){
				$this.html($this.data('count'));
			} else {    
				setTimeout(function(){count($this)}, 300);
			}
		}        	
		$(".stat-count").each(function() {
		  $(this).data('count', parseInt($(this).html(), 10));
		  $(this).html('0');
		  count($(this));
		});
   })(jQuery);

   $(".sectionContact input").focusin(function(){
   	$(this).css("border-width", "0px 3px 0px 6px");
   	$(this).css("background-color", "rgba(255,255,255,.9)");
   });
   $(".sectionContact input").focusout(function(){
   	$(this).css("border-width", "0px 0px 0px 6px");
   	$(this).css("background-color", "rgba(255,255,255,.8)");
   });
   $(".sectionContact textarea").focusin(function(){
   	$(this).css("border-width", "0px 3px 0px 6px");
   	$(this).css("background-color", "rgba(255,255,255,.9)");
   });
   $(".sectionContact textarea").focusout(function(){
   	$(this).css("border-width", "0px 0px 0px 6px");
   	$(this).css("background-color", "rgba(255,255,255,.8)");
   });


   $(".machine1").mouseenter(function(){
   	$(this).css("width","60%");
      $(".machine2").css("width","9.8%");
   	$(".machine3").css("width","9.8%");
   	$(".machine4").css("width","9.8%");
   	$(".machine5").css("width","9.8%");
   });
   $(".machine1").mouseleave(function(){
   	$(this).css("width","20%");
   	$(".machine2").css("width","19.8%");
   	$(".machine3").css("width","19.8%");
   	$(".machine4").css("width","19.8%");
   	$(".machine5").css("width","19.8%");
   });

    $(".machine2").mouseenter(function(){
   	$(this).css("width","60%");
   	$(".machine1").css("width","9.8%");
   	$(".machine3").css("width","9.8%");
   	$(".machine4").css("width","9.8%");
   	$(".machine5").css("width","9.8%");
   });
   $(".machine2").mouseleave(function(){
   	$(this).css("width","20%");
   	$(".machine1").css("width","19.8%");
   	$(".machine3").css("width","19.8%");
   	$(".machine4").css("width","19.8%");
   	$(".machine5").css("width","19.8%");
   });

    $(".machine3").mouseenter(function(){
   	$(this).css("width","60%");
   	$(".machine1").css("width","9.8%");
   	$(".machine2").css("width","9.8%");
   	$(".machine4").css("width","9.8%");
   	$(".machine5").css("width","9.8%");
   });
   $(".machine3").mouseleave(function(){
   	$(this).css("width","20%");
   	$(".machine1").css("width","19.8%");
   	$(".machine2").css("width","19.8%");
   	$(".machine4").css("width","19.8%");
   	$(".machine5").css("width","19.8%");
   });

    $(".machine4").mouseenter(function(){
   	$(this).css("width","60%");
   	$(".machine1").css("width","9.8%");
   	$(".machine2").css("width","9.8%");
   	$(".machine3").css("width","9.8%");
   	$(".machine5").css("width","9.8%");
   });
   $(".machine4").mouseleave(function(){
   	$(this).css("width","20%");
   	$(".machine1").css("width","19.8%");
   	$(".machine2").css("width","19.8%");
   	$(".machine3").css("width","19.8%");
   	$(".machine5").css("width","19.8%");
   });

    $(".machine5").mouseenter(function(){
   	$(this).css("width","60%");
   	$(".machine1").css("width","9.8%");
   	$(".machine2").css("width","9.8%");
   	$(".machine3").css("width","9.8%");
   	$(".machine4").css("width","9.8%");
   });
   $(".machine5").mouseleave(function(){
   	$(this).css("width","20%");
   	$(".machine1").css("width","19.8%");
   	$(".machine2").css("width","19.8%");
   	$(".machine3").css("width","19.8%");
   	$(".machine4").css("width","19.8%");
   });
});