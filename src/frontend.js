(function($) {
    ("use strict");

    $(document).ready(function() {
        // $(window).load(function () {
        //   var slidetabcenter = new Swiper(".sec-listing-slide-1 .swiper", {
        //     spaceBetween: 0,
        //     slidesPerView: 3,
        //     centeredSlides: true,
        //     roundLengths: true,
        //     speed: 800,
        //     autoplay: {
        //       delay: 3000,
        //       disableOnInteraction: false,
        //     },
        //     loop: true,
        //     loopAdditionalSlides: 100,
        //     observer: true,
        //     observeParents: true,
        //     navigation: {
        //       nextEl: ".sec-listing-slide-1 .swiper-button-next",
        //       prevEl: ".sec-listing-slide-1 .swiper-button-prev",
        //     },
        //   });
        // });

        $(".tabs-nav li").click(function(e) {
            e.preventDefault();

            $(".tabs-nav li").removeClass("active-tab");
            $(this).addClass("active-tab");

            var thisindex = $(this).index() + 1;
            $(".tab-content .tab-item").removeClass("active");
            $(".tab-content .tab-item:nth-child(" + thisindex + ")").addClass(
                "active"
            );

            reinitializeSwiper(slidetabcenter);

            return false;
        });

        function reinitializeSwiper(slidetabcenter) {
            setTimeout(function() {
                slidetabcenter.update();
            }, 400);
        }

        var slideTes = new Swiper(".slide-testimonial .swiper", {
            spaceBetween: 10,
            slidesPerView: 2,
            speed: 800,
            loop: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".slide-testimonial .swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
            },
        });

        var slideProject = new Swiper(".slide-project .swiper", {
            spaceBetween: 10,
            slidesPerView: 4,
            speed: 800,
            // autoplay: {
            //   delay: 6000,
            //   disableOnInteraction: false,
            // },
            navigation: {
                nextEl: ".slide-project .swiper-button-next",
                prevEl: ".slide-project .swiper-button-prev",
            },
            pagination: {
                el: ".slide-project .swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                992: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
            },
        });

        var aboutSlide = new Swiper(".about-slide .swiper", {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 2,
            speed: 800,
            centeredSlides: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        });

        jQuery("#accordian h3").click(function() {
            if (!jQuery(this).parent().hasClass("active")) {
                jQuery(this).next().slideDown();
                jQuery(this).parent().addClass("active");
            } else {
                jQuery(this).next().slideUp();
                jQuery(this).parent().removeClass("active");
            }
        });

        $(".tab-heading .tab-item").click(function(e) {
            e.preventDefault();

            var thisTab = $(this).attr("data-tab");

            $(".tab-heading .tab-item, .tab-content-item").removeClass("active");

            $(this).addClass("active");
            $('.tab-content-item[data-tab="' + thisTab + '"]').addClass("active");

            return false;
        });
    });

    /// Slide page single post
    var slideProject = new Swiper(".slide-blogs .swiper", {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
        speed: 800,
        // autoplay: {
        //   delay: 6000,
        //   disableOnInteraction: false,
        // },
        navigation: {
            nextEl: ".slide-blogs .swiper-button-next",
            prevEl: ".slide-blogs .swiper-button-prev",
        },
        pagination: {
            el: ".slide-blogs .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },
    });

    var slideBaoGia = new Swiper(".slide-bao-gia .swiper", {
        spaceBetween: 15,
        slidesPerView: 4,
        speed: 800,
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: ".slide-bao-gia .swiper-button-next",
            prevEl: ".slide-bao-gia .swiper-button-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
        },
    });
})(jQuery);