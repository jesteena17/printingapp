//(function($) {

	// preloader
	jQuery(window).on('load', function(e) {
    jQuery('#preloader').delay(450).fadeOut('slow');
  });

  // Sticky header
  jQuery(window).scroll(function() {
    if (jQuery("#header").offset().top > 50) {
      jQuery("#header").addClass("active");
      jQuery(".scrolltotop").addClass("show-to-top");
    } else {
      jQuery("#header").removeClass("active");
      jQuery(".scrolltotop").removeClass("show-to-top");
    }
  });

  // Show to top
  jQuery(function() {
    jQuery('a.scrolltotop').bind('click', function(event) {
      var $anchor = jQuery(this);
      jQuery('html, body').stop().animate({
        scrollTop: jQuery($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  });

  jQuery(function() {
    $('.emojiField').emoji({place: 'after'});
  });

  $('.btnNext').click(function() {
    $('.nav-tabs li .active').parent().next('li').find('a').trigger('click');
  });

  // $('.btnBack').click(function() {
  //   $('.nav-tabs li .active').parent().prev('li').find('a').trigger('click');
  // });

//})(jQuery);

  $(document).ready(function () {
    bsCustomFileInput.init()
  });

  $(document).ready(function() {

    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });

    if ($(window).width() < 992) {
      $('.dropdown-menu a').click(function(e){
        e.preventDefault();
          if($(this).next('.submenu').length){
            $(this).next('.submenu').toggle();
          }
          $('.dropdown').on('hide.bs.dropdown', function () {
         $(this).find('.submenu').hide();
      })
      });
    }
  
  });