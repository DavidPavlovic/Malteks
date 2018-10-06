$(document).ready(function() {
    $('#nav-icon').click(function() {
        $('nav ul').toggleClass('show');
        $(this).toggleClass('open');
    });

    var $findme = $('#numbers');
    var exec = false;
    
    function Scrolled() {
        $findme.each(function() {
            var $section = $(this);
            var findmeOffset = $section.offset();
            var findmeTop = findmeOffset.top;
            var findmeBottom = $section.height() + findmeTop;
            var scrollTop = $(document).scrollTop();
            var visibleBottom = window.innerHeight;
            var prevVisible = $section.prop('_visible');

            if((findmeTop > scrollTop + visibleBottom) ||
                findmeBottom < scrollTop) {
                visible = false;
            } else  {
                visible = true;
            }

            if(!prevVisible && visible) {
                if(!exec){
                    $('.fig-number').each(function() {
                        $(this).prop('Counter', 0).animate({
                            Counter: $(this).text()
                        }, {
                        duration: 4000,

                        step: function(now) {
                            $(this).text(Math.ceil(now));
                                exec = true;
                        }
                        });
                    });
                }
            }
            $section.prop('_visible', visible);
        });
    }

    function Setup() {
        var $top = $('#top');
        var $bottom = $('#bottom');

        $top.height(500);
        $bottom.height(500);

        $(window).scroll(function() {
            Scrolled();
        });
    }

    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
    $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scroll-to-top').fadeIn();
    } else {
        $('.scroll-to-top').fadeOut();
    }});
      $('.scroll-to-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop : 0}, 800);
    });
});