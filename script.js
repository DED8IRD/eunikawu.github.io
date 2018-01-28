$(document).ready(function() {

    // Add scrollspy to <body>
    var navOffset = $('.navbar').height();
    $('body').scrollspy({target: ".navbar", offset: navOffset});   
    
    // Smooth scroll to anchors
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                && 
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - navOffset + 1
                    }, 300, function () {
                        window.location.hash = target;
                    });
                }
            }
        });
    
    // Closes responsive menu when a scroll trigger link is clicked
    $('#navigation').click(function() {
        $('.navbar-collapse').collapse('hide');
    }); 
    
    // Lightbox for portfolio items
    $(document).on('click', '.portfolio-container', function(event) {
        var $lightbox = $("<div id='lightbox'></div>");
        var $close = $("<span class='close'>&times;</span>");
        var $contents = $("<div class='modal-content'></div>");
        var $caption = $("<div class='caption-container'></div>");
        var $img = $(this).find('img')[0].outerHTML;
        $caption
            .append($(this).find('div.portfolio-hover-content').html());
        $lightbox
            .append($close)
            .append($contents
                .append($img)
                .append($caption));
        $('body').append($lightbox);
        $lightbox.fadeIn('fast');
        $lightbox.click(function() {
            $lightbox.fadeOut('fast');
        });
    });
});