(function($) {

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});  	
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
	}); 
    
    $(".col-lg-9 p>img").each(function(e){
        console.log("$(e).hasClass(\"postImg\")", $(this).hasClass('postImg'));
        console.log("e", this);
        if(!$(this).hasClass('postImg')){
            console.log("THEN WHY");
            var caption = "<br/><span>"+this.getAttribute("alt")+"</span>";
            $(this).parent().addClass("p-caption-container").append(caption);
        }
    });
    
    $(".col-lg-9 p>a>img").each(function(e){
        if(!$(this).hasClass('postImg')){
            var caption = "<br/><span>"+this.getAttribute("alt")+"</span>";
            $(this).parent().parent().addClass("p-caption-container").append(caption);
        }
    });

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });

		
})(jQuery);
