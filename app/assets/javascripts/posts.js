
$ ->
      $('.masonry-container').imagesLoaded ->
        $('.masonry-container').masonry
         isAnimated: true,
  		 animationOptions: {
  		 isFitWidth: true,
    	 duration: 750,
    	 easing: 'linear',
    	 queue: false }
          itemSelector: '.box '
          columnWidth: (containerWidth) ->
            if $(window).width() >= 992  //for col-md-4
              containerWidth /3
