document.addEventListener("DOMContentLoaded", (event) => {
    let video = document.querySelector("section.video-zoom video");
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
            "section.banner .img-ai img", { y: -50 }, { y: 20, duration: 2, ease: "power4.out" }
        );

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: "section.banner .img-ai",
                    pin: true,
                    start: "top-=100px top",
                    end: "top+=80px top",
                    scrub: 1,
                    ease: "power4.out",
                },
            })
            .to("section.banner .img-ai img", {
                y: 0,
                duration: 2,
                ease: "power2.out",
            });
    });

    const videoTimeline = (scale, start, end) => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.video-zoom",
                pin: true,
                start,
                end,
                scrub: 1,
                ease: "power1.out",
                onEnter: () => (video ? video.play() : null),
            },
        });
        tl.to("section.video-zoom video", {
            scale,
            duration: 2,
            ease: "power1.out",
        });
    };

    mm.add("(min-width: 1550px)", () =>
        videoTimeline(1.3, "top-=100px top", "bottom+=200px top")
    );
    mm.add("(min-width: 768px) and (max-width: 1549px)", () => {
        gsap.to("section.video-zoom video", {
            scale: 0.7,
            duration: 2,
            ease: "power1.out",
        });
        videoTimeline(1, "bottom-=130px bottom", "bottom-=100px bottom");
    });


    if (document.querySelector(".partners.splide")) {
        new Splide(".partners.splide ", {
            focus: "center",
            arrows: false,
            pagination: false,
            perPage: 5,
            autoScroll: {
                speed: 1,
            },
            type: "loop",
            breakpoints: {
                640: {
                    perPage: 2,
                },
            },
        }).mount(window.splide.Extensions);
    }
    if (document.querySelector(".logo-partner-single-services .splide")) {
        new Splide(".logo-partner-single-services .splide ", {
            focus: "center",
            arrows: false,
            pagination: false,
            perPage: 7,
            gap: 100,
            autoWidth: true,
            autoScroll: {
                speed: 1,
            },
            type: "loop",
            breakpoints: {
                1023: {
                    perPage: 4,
                },
                640: {
                    gap: 54,
                    perPage: 2,
                },
            },
        }).mount(window.splide.Extensions);
    }
    if (document.querySelector(".box-tab")) {
        const Tabshead = document.querySelectorAll(".box-tab .tab-item .tab-head");
        const TabsContent = document.querySelectorAll(
            ".box-tab .tab-item .tab-content"
        );

        Tabshead.forEach(function(e) {
            e.addEventListener("click", function(el) {
                TabsContent.forEach(function(ell) {
                    if (ell.getAttribute("data-tab") == e.getAttribute("data-tab")) {
                        if (ell.classList.contains("active")) {
                            ell.classList.remove("active");
                            e.classList.remove("active");
                        } else {
                            Tabshead.forEach(function(ell) {
                                if (ell.classList.contains("active")) {
                                    ell.classList.remove("active");
                                }
                            });
                            TabsContent.forEach(function(ell) {
                                if (ell.classList.contains("active")) {
                                    ell.classList.remove("active");
                                }
                            });
                            ell.classList.add("active");
                            e.classList.add("active");
                        }
                    }
                });
            });
        });
    }
    if (document.querySelector(".slide-customer")) {
        const swiper = new Swiper(".slide-customer .swiper", {
            effect: "fade",
            speed: 1000,
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            fadeEffect: {
                crossFade: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                320: {
                    slidesPerView: 1,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                },
            },
        });
    }
    if (document.querySelector(".service_slider")) {
        const service_slider = new Swiper(".service_slider .swiper", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 66,
            speed: 1200,
            centeredSlides: false,
            loopedSlides: 3,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 66,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                },
            },
        });
    }
    if (document.querySelector(".group-generative")) {
        const service_slider = new Swiper(".group-generative .swiper", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 66,
            speed: 1200,
            centeredSlides: false,
            loopedSlides: 3,
            navigation: false,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 66,
                },
                640: {
                    slidesPerView: 2.1,
                    spaceBetween: 20,
                },
                320: {
                    slidesPerView: 1.1,
                    spaceBetween: 10,
                },
            },
        });
    }

    if (document.querySelector(".slide-ourteam_feedback")) {
        const swiper = new Swiper(".slide-ourteam_feedback .swiper", {
            effect: "fade",
            speed: 1000,
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                // dynamicBullets: true, // Kích hoạt dynamic pagination
                // dynamicMainBullets: 1, // Giới hạn 3 dấu chấm hiển thị
            },
            fadeEffect: {
                crossFade: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                320: {
                    slidesPerView: 1,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                },
            },
        });
    }
    let lastScrollTop = window.scrollY;
    const header = document.querySelector("header#masthead");
    if (!header) return;

    const adminBar = document.querySelector("#wpadminbar");
    const adminBarHeight = adminBar ? adminBar.offsetHeight : 0;
    let isTicking = false;

    function updateHeader() {
        if (isTicking) return;
        isTicking = true;

        requestAnimationFrame(() => {
            let currentScroll = window.scrollY;

            if (currentScroll > 100) {
                if (currentScroll < lastScrollTop) {
                    header.classList.add("scrollUp");
                    header.classList.remove("scrollDown");
                    header.style.top = `${adminBarHeight}px`;
                } else {
                    header.classList.remove("scrollUp");
                    header.classList.add("scrollDown");
                    header.style.top = `-${adminBarHeight + header.offsetHeight}px`;
                }
            } else {
                header.classList.remove("scrollDown", "scrollUp");
                header.style.top = `${adminBarHeight}px`;
            }

            lastScrollTop = Math.max(currentScroll, 0);
            isTicking = false;
        });
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader);


    const listTab = document.querySelector(
        ".Products-Solutions .products .list-tab"
    );
    mm.add("(min-width: 768px)", () => {
        if (listTab) {
            gsap.registerPlugin(ScrollTrigger);
            ScrollTrigger.create({
                trigger: ".Products-Solutions .products",
                start: "top top",
                end: "bottom top",
                toggleClass: {
                    targets: ".Products-Solutions .products .list-tab",
                    className: "active",
                },

                markers: false,
            });
        }
    });

    if (window.innerWidth >= 1024) {
        const contenBanner = document.querySelector(
            "section.banner .content-banner"
        );
        const wTitle = document.querySelector("section.banner .title .text-left");
        if (contenBanner && wTitle) {
            document.fonts.ready.then(() => {
                contenBanner.style.marginLeft = wTitle.offsetWidth + 22 + "px";
            });
            let debounceResize;
            window.addEventListener("resize", function(e) {
                clearTimeout(debounceResize);
                debounceResize = setTimeout(function() {
                    if (e.target.innerWidth >= 1024) {
                        contenBanner.style.marginLeft = wTitle.offsetWidth + 22 + "px";
                    } else {
                        contenBanner.style.marginLeft = "0px";
                    }
                }, 100);
            });
        }
    }

    if (document.querySelector(".button-back-to-top a")) {
        window.addEventListener("scroll", function(e) {
            if (window.scrollY > 100) {
                document.querySelector(".button-back-to-top a").classList.add("active");
                document
                    .querySelector(".button-back-to-top a")
                    .addEventListener("click", function() {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    });
            } else {
                document
                    .querySelector(".button-back-to-top a")
                    .classList.remove("active");
            }
        });
    }
    if (window.innerWidth <= 767) {
        const btnTabs = document.querySelectorAll(
            ".Products-Solutions .products .list-tab a"
        );
        const listProduct = document.querySelectorAll(
            ".Products-Solutions .products .list-product .box-item"
        );
        if (btnTabs.length > 0) {
            btnTabs.forEach(function(e, index) {
                if (index == 0) {
                    e.classList.add("active");
                }
                e.addEventListener("click", function(el) {
                    el.preventDefault();
                    const id = e.getAttribute("href").replace("#", "");
                    btnTabs.forEach(function(ell) {
                        ell.classList.remove("active");
                    });
                    e.classList.add("active");
                    listProduct.forEach(function(ell) {
                        if (ell.id == id) {
                            ell.style.display = "flex";
                        } else {
                            ell.style.display = "none";
                        }
                    });
                });
            });
        }
    }
    if (window.innerWidth > 767) {
        const btnTabs = document.querySelectorAll(
            ".Products-Solutions .products .list-tab a"
        );
        const listProduct = document.querySelectorAll(
            ".Products-Solutions .products .list-product .box-item"
        );
        if (btnTabs.length > 0) {
            btnTabs.forEach(function(e, index) {
                if (index == 0) {
                    e.classList.add("active");
                }
                e.addEventListener("click", function(el) {
                    el.preventDefault();
                    const id = e.getAttribute("href").replace("#", "");
                    btnTabs.forEach(function(ell) {
                        ell.classList.remove("active");
                    });
                    e.classList.add("active");
                });
            });
        }
    }
    const btnMenu = document.querySelectorAll(".menu-toggle-custom");
    if (btnMenu.length > 0) {
        btnMenu.forEach(function(e) {
            e.addEventListener("click", function() {
                // btnMenu.forEach(function(ell) {
                //     if (ell.getAttribute("aria-expanded") == "true") {
                //         ell.setAttribute("aria-expanded", "false");
                //     } else {
                //         ell.setAttribute("aria-expanded", "true");
                //     }
                // });
                if (
                    document
                    .querySelector("header .main-navigation")
                    .classList.contains("toggled")
                ) {
                    document
                        .querySelector("header .main-navigation")
                        .classList.remove("toggled");
                    document
                        .querySelector("header.site-header")
                        .classList.remove("toggled");
                    document;
                    if (window.scrollY > 100) {
                        setTimeout(() => {
                            document
                                .querySelector("header.site-header")
                                .classList.add("scrollUp");
                        }, 500);
                    }
                } else {
                    document
                        .querySelector("header .main-navigation")
                        .classList.add("toggled");
                    document.querySelector("header.site-header").classList.add("toggled");
                    document
                        .querySelector("header.site-header")
                        .classList.remove("scrollUp");
                }
            });
        });
    }

    // Jquery
    const aId = document.querySelectorAll('a[href^="#"]');
    if (aId.length > 0) {
        aId.forEach((anchor) => {
            anchor.addEventListener("click", function(e) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const offset =
                        targetElement.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: offset, behavior: "smooth" });
                }
            });
        });
    }
    if (window.innerWidth < 767) {
        document
            .querySelectorAll("#primary-menu li.menu-item-has-children > a")
            .forEach((menu) => {
                menu.addEventListener("click", function(event) {
                    let submenu = this.nextElementSibling;
                    let parentLi = this.parentElement;
                    if (submenu && submenu.classList.contains("sub-menu")) {
                        event.preventDefault();

                        if (submenu.classList.contains("show")) {
                            window.location.href = this.href;
                        } else {
                            document
                                .querySelectorAll(".sub-menu")
                                .forEach((sub) => sub.classList.remove("show"));

                            submenu.classList.add("show");
                            parentLi.classList.add("show");
                        }
                    }
                });
            });
    }
});