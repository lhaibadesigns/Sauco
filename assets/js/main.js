/*===================================================
    Template Scripts
====================================================*/
(function($){ "use strict";

    // Preloader     
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

    $(document).ready(function() {
        
        // Main Header
        var primaryHeader = $('.primary-header'),
            headerClone = primaryHeader.clone();
        $('.header').after('<div class="sticky-header"></div>');
        $('.sticky-header').html(headerClone);
        var headerSelector = document.querySelector(".sticky-header");
        var triggerPoint = $('.header').height();
        var yOffset = 0;

        $(window).on('scroll', function () {
            yOffset = $(window).scrollTop();
            if (yOffset >= triggerPoint) {
                $('.sticky-header').addClass('sticky-fixed-top');
            } else {
                $('.sticky-header').removeClass('sticky-fixed-top');
            }
        });

        if ($('.primary-header').length) {
            $('.header .primary-header .burger-menu').on("click", function () {
                $(this).toggleClass('menu-open');
                $('.header .header-menu-wrap').slideToggle(300);
            });

            $('.sticky-header .primary-header .burger-menu').on("click", function () {
                $(this).toggleClass('menu-open');
                $('.sticky-header .header-menu-wrap').slideToggle(300);
            });
        }

        $('.header-menu-wrap ul li:has(ul)').each(function () {
            $(this).append('<span class="dropdown-plus"></span>');
            $(this).addClass('dropdown_menu');
        });

        $('.header-menu-wrap .dropdown-plus').on("click", function () {
            $(this).prev('ul').slideToggle(300);
            $(this,).toggleClass('dropdown-open');
            $('.header-menu-wrap ul li:has(ul)').toggleClass('dropdown-open');
        });

        $('.header-menu-wrap .dropdown_menu a').append('<span></span>');

        // Responsive Classes
        function responsiveClasses() {
            var body = $('body');
            if ($(window).width() < 992) {
                body.removeClass('viewport-lg');
                body.addClass('viewport-sm');
            } else {
                body.removeClass('viewport-sm');
                body.addClass('viewport-lg');
            }
        }

        //responsiveClasses();
        $(window).on("resize", function () {
            responsiveClasses();
        }).resize();

        // Popup Search Box
        $(function () {
            $('#popup-search-box').removeClass('toggled');

            $('.dl-search-icon').on('click', function (e) {
                e.stopPropagation();
                $('#popup-search-box').toggleClass('toggled');
                $("#popup-search").focus();
            });

            $('#popup-search-box input').on('click', function (e) {
                e.stopPropagation();
            });

            $('#popup-search-box, body').on('click', function () {
                $('#popup-search-box').removeClass('toggled');
            });
        });
        
        // Button Style
		$('.default-btn, .wc-forward').append('<span></span>');
		$('.default-btn, .wc-forward').on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({ top: relY, left: relX })
		}).on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({ top: relY, left: relX })
		});
        
        //Range Slider
        if( $('body').hasClass('shop') ){
            var slider = document.getElementById("price-range");
            var output = document.getElementById("price-output");
            output.innerHTML = "$" + slider.value;
            slider.oninput = function() {
                output.innerHTML =  "$"+this.value;
            }
        }
        
        //Swiper Slider For Shop
        var swiper = new Swiper(".product-gallary-thumb", {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(".product-gallary", {
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: ".swiper-nav-next",
                prevEl: ".swiper-nav-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });

        //Watch Carousel  
        var swiperWatch = new Swiper('.watch-carousel', {
            lazy: true,
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            slidesPerView: "2",
            spaceBetween: 0,
            autoplay: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 5,
                slideShadows: false
            },
            navigation: {
                nextEl: ".carousel-wrap .swiper-next",
                prevEl: ".carousel-wrap .swiper-prev",
            },
        });
        
        //Testimonial Carousel  
        var swiperTestimonial = new Swiper(".testimonial-carousel", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: true,
            speed: 400,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                }
            }
        });
        
        //Team Carousel  
        var swiperTeam = new Swiper(".team-carousel", {
            slidesPerView: "4",
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            autoplay: false,
            speed: 400,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".team-carousel .swiper-next",
                prevEl: ".team-carousel .swiper-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 0
                },
                // when window width is >= 767px
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 30
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 1
                }
            }
        });
        
        //Shop Carousel  
        var swiperShop = new Swiper(".shop-carousel", {
            slidesPerView: "4",
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            speed: 500,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".shop-carousel .swiper-next",
                prevEl: ".shop-carousel .swiper-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 0
                },
                // when window width is >= 767px
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 30
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 1
                }
            }
        });
        
        //Sponsor Carousel  
        var swiperSponsor = new Swiper(".sponsor-carousel", {
            slidesPerView: "5",
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            speed: 700,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 0
                },
                // when window width is >= 767px
                767: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 0
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 5,
                    slidesPerGroup: 1
                }
            }
        });
        
        // Venobox Active
        new VenoBox({
            selector: '.dl-video-popup, .dl-img-popup',
            bgcolor: 'transparent',
            numeration: true,
            infinigall: true,
            spinner: 'plane',
        });
        
        // Custom Cursor
        $('body').append('<div class="dl-cursor"></div>');
        var cursor = $('.dl-cursor'),
            linksCursor = $('a, .swiper-nav'),
            crossCursor = $('.cross-cursor');

        $(window).on('mousemove', function (e) {
            cursor.css({ 'transform': 'translate(' + (e.clientX - 15) + 'px,' + (e.clientY - 15) + 'px)', 'visibility': 'inherit' });
        });

        $(window).on('mouseout', function () {
            cursor.css('visibility', 'hidden');
        });

        linksCursor.each(function () {
            $(this).on('mouseleave', function () {
                cursor.removeClass('cursor-grow');
            });
            $(this).on('mouseover', function () {
                cursor.addClass('cursor-grow');
            });
        });

        crossCursor.each(function () {
            $(this).on('mouseleave', function () {
                cursor.removeClass('cross');
            });
            $(this).on('mouseover', function () {
                cursor.addClass('cross');
            });
        });
        
        // Odometer
        $('.odometer').waypoint(
            function() {
                var odo = $(".odometer");
                odo.each(function() {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
            }, {
                offset: "80%",
                triggerOnce: true
            }
        );
        
        // On Click Sound
        var obj = document.createElement("audio");
            obj.src = "assets/audio/click.wav";
            obj.volume = 1;
            obj.autoPlay = false;
            obj.preLoad = true;
            obj.controls = true;
            
        $(".default-btn, .swiper-nav, .dl-video-popup, .scroll-to-top, .search-icon, .sponsor-item, .swiper-pagination-bullet, .read-more").on('click', function() {
            obj.play();
        });
        
        // Current Year
        var currentYear  = new Date().getFullYear();
        $('#currentYear').append(currentYear);

        // Scrool To Top
        var scrollTop = $("#scroll-top");
        $(window).on('scroll', function() {
            var topPos = $(this).scrollTop();
            if (topPos > 100) {
                $('#scrollup').removeClass('hide');
                $('#scrollup').addClass('show');

            } else {
                $('#scrollup').removeClass('show');
                $('#scrollup').addClass('hide');
            }
        });

        $(scrollTop).on("click", function() {
            $('html, body').animate({
                scrollTop: 0
            },0);
            return false;
        });

        // Wow JS Active
        new WOW().init();

        // MailChimp
        if ($('.subscribe-form').length>0) {
            /*  MAILCHIMP  */
            $('.subscribe-form').ajaxChimp({
                language: 'en',
                callback: mailchimpCallback,
                url: "https://gmail.us4.list-manage.com/subscribe/post?u=540c52965f5180ae846e5e5a8&amp;id=4dbe9a9245&amp;f_id=0027a5ebf0"
            });
        }

        function mailchimpCallback(resp) {
            if (resp.result === 'success') {
                $('#subscribe-result').addClass('subs-result');
                $('.subscription-success').text(resp.msg).fadeIn();
                $('.subscription-error').fadeOut();
                setTimeout(function(){
                    $('#subscribe-result').removeClass('subs-result');
                    $('.subscription-success').fadeOut();
                }, 5000);
            } else if(resp.result === 'error') {
                $('#subscribe-result').addClass('subs-result');
                $('.subscription-error').text(resp.msg).fadeIn();
            }
        }
        $.ajaxChimp.translations.en = {
            'submit': 'Submitting...',
            0: 'We have sent you a confirmation email',
            1: 'Please enter your email',
            2: 'An email address must contain a single @',
            3: 'The domain portion of the email address is invalid (the portion after the @: )',
            4: 'The username portion of the email address is invalid (the portion before the @: )',
            5: 'This email address looks fake or invalid. Please enter a real email address'
        };
        
    });

})(jQuery);