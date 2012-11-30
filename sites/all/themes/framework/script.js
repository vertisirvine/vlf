jQuery(document).ready(function () {
	 var jqfx_imageflow = jQuery('.views-jqfx-imageflow-images');
	 var images = jqfx_imageflow.find('.images').find('img');
	 var jqfx_imageflow_nav = jQuery('.navigation');
	 var jqfx_imageflow_len = jqfx_imageflow.find('.images img').length;
	 jqfx_imageflow_nav.append('<ul id="views-jqfx-imageflow_coins"></ul>');
	 var jqfx_imageflow_coins = jQuery('#views-jqfx-imageflow_coins');
	 for (i = 0; i < jqfx_imageflow_len; i++) {
	  if (i == 0) {
	   jqfx_imageflow_coins.append('<li><a href="#" data-jqfx_imageflow_img="' + i +'" class="active"></a></li>');
	  } else {
	   jqfx_imageflow_coins.append('<li><a href="#" data-jqfx_imageflow_img="' + i +'"></a></li>');
	  }
	 }
	 jQuery('#views-jqfx-imageflow_coins a').click(function() {
		if (jQuery(this).hasClass('active'))
			return false;
		
		var curr = jQuery('#views-jqfx-imageflow_coins').find('.active').data('jqfx_imageflow_img');
		var goal = jQuery(this).data('jqfx_imageflow_img');
		
		if (goal>curr)
			ww(goal-curr,false);
		else
			ww(curr-goal,true);
				
		jQuery('#views-jqfx-imageflow_coins a').removeClass('active');
		var jqfx_imageflow_id = jQuery(this).addClass('active').data('jqfx_imageflow_img');
		
		return false;
	 });
	 
	var ww = function clicker (count, reverse) {
		for (var i=0; i<count; i++)
		{
			if (reverse) 
			{
				jQuery('.previous').click();
			}
			else 
			{
				jQuery('.next').click();
			}
		}
		return false;	
	}
 
 	var vv = function coins () {
		var max_val = 0;
		var max_ind = 0;
		images.each(function(number, image) {
				if ( parseInt(jQuery(image).css('z-index')) >= max_val && jQuery(image).css('display') == 'block' )
					{
						max_val = jQuery(image).css('z-index');
						max_ind = number;	
					}
			}
		);
		jQuery('#views-jqfx-imageflow_coins a').removeClass('active');
		jQuery(jQuery('#views-jqfx-imageflow_coins a')[max_ind]).addClass('active');
		return false;	
	}
	
	setInterval(vv, 100);
		
	jQuery('.node-type-page').find('#main').jScrollPane({showArrows: false});
	
	if (jQuery('body').hasClass('node-type-slideshow'))
		jQuery('#page-title').css('left', (962 - jQuery('#page-title').width())/2 + "px");
		
    return false;
});