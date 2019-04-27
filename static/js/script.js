function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

$(document).ready(function() {

    // Add scrollspy to <body>
    const navOffset = $('.navbar').height();
    $('#navbar').attr('data-offset-top', vh(100) - navOffset)
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
                const hash = this.hash;
                let target = $(hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - navOffset + 1
                    }, 300, function () {
                        window.location.hash = hash;
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
        const $lightbox = $("<div id='lightbox'></div>");
        const $close = $("<p class='close'>&times;</p>");
        const $contents = $("<div class='modal-dialogue modal-content'></div>");
        const $caption = $("<div class='caption-container'></div>");
        const $img = $(this).find('img')[0].outerHTML;
        $caption
            .append($(this).find('div.portfolio-hover-content').html());
        $lightbox
            .append($contents
                .append($img)
                .append($close)
                .append($caption))
        $('body').append($lightbox);
        $lightbox.fadeIn('fast');
        $lightbox.click(function() {
            $lightbox.fadeOut('fast');
        });
    });
});