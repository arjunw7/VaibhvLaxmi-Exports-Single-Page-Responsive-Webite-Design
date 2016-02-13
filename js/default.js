

$(document).ready(function(){
	jQuery(window).load(function() {
	        // will first fade out the loading animation
		jQuery("#status").fadeOut();
	        // will fade out the whole DIV that covers the website.
		jQuery("#preloader").delay(1000).fadeOut(500);
	})

	$(".section1").on({
		mouseenter: function(){
			$("#overview").attr('src','../images/overviewWhite.png');
		},
		mouseleave: function(){
			$("#overview").attr('src','../images/overview.png');
		}
	});
	$(".section2").on({
		mouseenter: function(){
			$("#outreach").attr('src','../images/outreachWhite.png');
		},
		mouseleave: function(){
			$("#outreach").attr('src','../images/outreach.png');
		}
	});
	$(".section3").on({
		mouseenter: function(){
			$("#strategy").attr('src','../images/strategyWhite.png');
		},
		mouseleave: function(){
			$("#strategy").attr('src','../images/strategy.png');
		}
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
				setTimeout(function(){count($this)}, 50);
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
});