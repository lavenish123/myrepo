jQuery(document).ready(function($) {
	$(function(){
      $("#typed").typed({
        strings: ["store", "coffee", "restaurant", "office", "hotel"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 2000,
        loop: true,
        cursorChar: '|',
      });
  });
   
  
$(".edit-pannel").click(function(){
$(this).parents(".pannel-info").addClass("action-active");
});  
  
  
$(".save-pannel, .close-pannel").click(function(){
$(this).parents(".pannel-info").removeClass("action-active");
}); 
  
});













