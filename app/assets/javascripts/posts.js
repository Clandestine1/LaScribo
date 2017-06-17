
$ ->
      $('.masonry-container').imagesLoaded ->
        $('.masonry-container').masonry
        .isAnimated: !Modernizr.csstransitions
          itemSelector: '.box '
          columnWidth: (containerWidth) ->
            if $(window).width() >= 992  //for col-md-4
              containerWidth /3
  