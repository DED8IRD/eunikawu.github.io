import $ from 'jquery'
import Bootstrap from 'bootstrap'
import ScrollReveal from 'scrollreveal'

import style from './scss/style.scss'

// // import static images
// import portrait from '../static/images/portrait.png'
// import DAVE from '../static/images/projects/DAVE.png'
// import EchoVisualization from '../static/images/projects/EchoVisualization.png'
// import EmVibe from '../static/images/projects/EmVibe.png'
// import NodingBat from '../static/images/projects/NodingBat.png'
// import ProcessDashboard from '../static/images/projects/ProcessDashboard.png'
// import SENTIENCE from '../static/images/projects/SENTIENCE.png'
// import favicon from '../static/images/icons/favicon.ico'

$(function() {
    window.sr = ScrollReveal({
        duration: 500,
        delay: 200,
        easing: 'ease-out',        
    })

    // Add scrollspy to <body>
    const navOffset = $('.navbar').height();
    $('body').scrollspy({target: ".navbar", offset: navOffset});
    
    // Closes responsive menu when a scroll trigger link is clicked
    $('#navigation').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    }); 

    // Affix navbar after hero
    $(window).on('scroll', function(event) {
        const scrollValue = $(window).scrollTop();
        const heroHeight = $('.hero').height();
        if (scrollValue >= heroHeight) {
             $('.navbar').addClass('fixed-top');
        } else {
             $('.navbar').removeClass('fixed-top');
        }
    });

    // Copy business card content to card stack
    const cardContents = $('.biz-card-front').html()
    $('.biz-card-under').append(cardContents)
    
    // Lightbox for portfolio items
    $(document).on('click', '.portfolio-container', function(event) {
        const $lightbox = $("<div id='lightbox'></div>");
        const $close = $("<p class='close'>&times;</p>");
        const $contents = $("<div class='modal-dialogue modal-dialogue-centered modal-content'></div>");
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

    // Fullscreen resume pdf
    const resume = $('#resume-pdf')
    $('#dl-resume-btn').on('click', function(event) {
        resume.attr('src', 'https://drive.google.com/file/d/1zf3sAd7BcNIprBl9OHaJApp94Sz6CKbJ/preview')
        resume.on('load', function() {
            if ($('#resume-pdf:visible').length === 0 && !resume.fullscreenElement) {
                resume.requestFullscreen()
            }
        })
    })

    // Scroll reveal animations
    sr.reveal('section > *')
    sr.reveal('.projects > .portfolio-item', {
        origin: 'left',
        distance: '10%',
        interval: 200,
        duration: 600,
        easing: "ease-in-out",
    })    
    sr.reveal('.skills > .skill', {
        origin: 'right',
        distance: '10%',
        interval: 300,
        duration: 700,
        easing: "ease-in-out",        
    })
    sr.reveal('.contacts > a > i', {
        origin: 'left',
        distance: '10%',
        interval: 200,
        duration: 600,
        easing: "ease-in-out",        
    })
    sr.reveal('.click-me', {
        origin: 'top',
        distance: '0.5rem',
        duration: 700,
    })
});