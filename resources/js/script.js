$(document).ready(function() {

    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('header nav').addClass('sticky')
        } else {
            $('header nav').removeClass('sticky')
        }
    }, {
      offset: '60px;'
    });
    
    /*
    var waypoints = $('#handler-first').waypoint(function(direction) {
      notify(this.element.id + ' hit 25% from top of window') 
    }, {
      offset: '25%'
    })
    */
    
});