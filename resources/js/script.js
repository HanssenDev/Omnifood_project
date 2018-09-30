$(document).ready(function() {

    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('header nav').addClass('sticky')
        } else {
            $('header nav').removeClass('sticky')
        }
    }, {
      offset: '60px;'
    });
    
    
    /* For the scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-sign-up').offset().top}, 1000);   
    });
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 800); 
    });
    
    /* For the scroll on links */
    $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
    
    /* For animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '75%'
    });
    

});