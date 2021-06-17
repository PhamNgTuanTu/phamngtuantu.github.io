(() => {
    // wow
    new WOW().init();
    // --wow--

    // slider
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 1,
                nav: false,
            },
            1000: {
                items: 2,
                nav: false,
            },
        },
    });
    // --slider--

    // progress-bar
    var progress = document.getElementById("progressbar");
    var totalHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function() {
        var progressHeight = (window.pageYOffset / totalHeight) * 100;
        progress.style.height = progressHeight + "%";
    };
    // --progress-bar--

    // giỏ hàng và duy chuyển lên đầu trang

    // giỏ hàng
    window.addEventListener("scroll", function() {
        var shopping_cart = document.querySelector(".shopping-cart");
        shopping_cart.classList.toggle(
            "active-scroll-shopping",
            window.scrollY > 1
        );
    });
    // --giỏ hàng--

    // scroll to top
    var scroll_top = document.querySelector(".scroll-top");
    window.addEventListener("scroll", function() {
        scroll_top.classList.toggle("active-scroll", window.scrollY > 500);
    });
    scroll_top.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
    // --scroll to top--

    // --giỏ hàng và duy chuyển lên đầu trang--

    // loading
    $(window).on("load", function() {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });
    // //loading

    // tắt animation trên tablet & mobile
    if ($(window).width() <= 991) {
        $(".wow").removeClass("wow");
        $(".animated").removeClass("animated");
    }
    // --tắt animation trên tablet & mobile--

    // click to content 
    $("#view-add").click(function() {
        var menu_tab = document.querySelector('#container-tile .list-tittle a:nth-child(1)');
        var width = document.querySelector('#container-tile .list-tittle a:nth-child(1)').offsetWidth;
        $("#container-tile .slider").css({
            "left": 0,
            "width": width
        });
        $("#container-tile .list-tittle a").removeClass('active');
        $("#add-active").addClass('active');
        $(".tab-slider--body").hide();
        $(".tab-slider--body:first").show();

        $('html, body').animate({
            scrollTop: $("#introduce-book").offset().top - 195
        }, 700);
    });
    // --click to content--

    // toggle-tab 
    $("document").ready(function() {
        $(".tab-slider--body").hide();
        $(".tab-slider--body:first").show();
    });

    $(".list-tittle li").click(function() {
        $(".tab-slider--body").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });
    // --toggle-tab-- 

})();