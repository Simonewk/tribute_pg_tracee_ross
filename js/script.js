$(document).ready(function(){
	

	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
  
		// Store hash
		var hash = this.hash; //(this.has means section name with # sign such as #sec_2, #sec_3 etc)
		
  
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		
		//The jQuery scrollTop & scrollLeft properties sets or returns the 
		// number of pixels an element's content is scrolled vertically & horizontally.
	
				$('html, body').animate({
					scrollTop: $(hash).offset().top 
				}, 800, function(){
					
					// Add hash  (#) (section name) to URL when done scrolling (like default click behavior)
					// Look at your web URL 
					window.location.hash = hash;

				});
		} // End if
		
	});
	


});