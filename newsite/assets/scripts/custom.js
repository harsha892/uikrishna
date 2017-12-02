$(document).ready(function() {
    /*    $(".site-nav li").click(function() {
            $(".site-nav li.active").removeClass('active');
            $(this).addClass('active');
        });*/
    $(window).scroll(function() {
        $(".site-nav li.active").removeClass("active");
        var scroll = $(window).scrollTop();
        if (scroll > 400) {
            $('nav').addClass('nav-up');
        } else {
            $('nav').removeClass('nav-up');
        }
        /*if (scroll >= 450 && scroll <= 1344) {
            $(".site-nav li:nth-child(2)").addClass("active");
        } else if (scroll <= 2341) {
            $(".site-nav li:nth-child(3)").addClass("active");
        } else if (scroll <=   2641) {
            $(".site-nav li:nth-child(4)").addClass("active");
        } else if(scroll >=   2641){
            $(".site-nav li:last-child").addClass("active");
        }*/
    });
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 400, function() {
                window.location.hash = hash;
            });
        }
    });
});