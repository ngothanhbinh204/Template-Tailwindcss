document.addEventListener("DOMContentLoaded", function () {
    // AOS.init();

    let timelineProcess = document.querySelector(".timeline_process");
    let timelineProcessMobile = document.querySelector(".timeline_process_mobile");
    let dots = document.querySelectorAll(".timeline-dot");
    let items = document.querySelectorAll(".timeline-item");
    let step = 100 / dots.length;
    let currentMode = window.innerWidth <= 768 ? "mobile" : "pc"; // Xác định chế độ ban đầu
    let tlPC, tlMobile;

    function resetEffects() {
      // Xóa class active trên tất cả items
      items.forEach(item => item.classList.remove("active"));

      // Reset lại màu sắc dot
      dots.forEach(dot => {
        gsap.set(dot, {
          backgroundColor: "",
          borderColor: "",
        });
      });

      // Reset lại tiến trình
      gsap.set(".timeline_process", { width: "0%" });
      gsap.set(".timeline_process_mobile", { height: "0%" });

      // Reset lại opacity & vị trí của <p> trong mỗi item
      items.forEach(item => {
        gsap.set(item.querySelector("p"), {
          opacity: 0,
          y: 20
        });
      });
    }

    function initTimeline() {
      let isMobile = window.innerWidth <= 768;
      let newMode = isMobile ? "mobile" : "pc";

      //  reset hiệu ứng khi chuyển screen
      if (newMode !== currentMode) {
        resetEffects();
        currentMode = newMode;
      }

      // Hủy animation cũ
      if (tlPC) tlPC.kill();
      if (tlMobile) tlMobile.kill();

      if (isMobile) {
        timelineProcess.style.display = "none";
        timelineProcessMobile.style.display = "block";

        // Animation cho Mobile
        tlMobile = gsap.timeline({
          scrollTrigger: {
            trigger: ".wrapper_timeline",
            start: "top-=100 center",
            end: "bottom top",
            toggleActions: "play none none none",
          },
        });

        dots.forEach((dot, index) => {
          tlMobile.to(".timeline_process_mobile", {
            height: `${(index + 1) * step}%`,
            duration: 0.3,
            ease: "power1.inOut",
          })
            .to(dot, {
              backgroundColor: "#ffffff",
              borderColor: "rgba(255, 219, 1, 1)",
              duration: 0.3,
              ease: "power1.inOut",
              onStart: () => {
                items[index].classList.add("active");
                gsap.to(items[index].querySelector("p"), {
                  opacity: 1,
                  y: 0,
                  duration: 0.3,
                  ease: "power1.out",
                });
              }
            })
            .to({}, { duration: 0.1 });
        });

      } else {
        timelineProcess.style.display = "block";
        timelineProcessMobile.style.display = "none";

        //  Animatiogn cho PC
        tlPC = gsap.timeline({
          scrollTrigger: {
            trigger: ".wrapper_timeline",
            start: "top-=100 center",
            end: "top-=0 center",
            toggleActions: "play none none none",
          },
        });

        dots.forEach((dot, index) => {
          tlPC.to(".timeline_process", {
            width: `${(index + 1) * step}%`,
            duration: 0.5,
            ease: "power1.inOut",
            backgroundColor: "rgba(255, 219, 1, 1)",
            onStart: () => {
              gsap.to(dot, {
                backgroundColor: "#ffffff",
                borderColor: "rgba(255, 219, 1, 1)",
                duration: 0.5,
                ease: "power1.inOut"
              });

              items[index].classList.add("active");

              gsap.to(items[index].querySelector("p"), {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power1.out"
              });
            }
          });
        });
      }
    }

    initTimeline();

    window.addEventListener("resize", initTimeline);
  });



  document.addEventListener("DOMContentLoaded", function (){

    var swiper = new Swiper(".swiper_feedback", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoHeight: false,
      loop: true,
      pauseOnMouseEnter: true,
      autoplay: {
      delay: 5000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }
    });
  
    var swiper = new Swiper(".swiper_project", {
      slidesPerView: 2,
      spaceBetween: 15,
      autoHeight: false,
      // loop: true,
      pauseOnMouseEnter: true,
      autoplay: {
      delay: 5000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  
      navigation: {
        nextEl: ".custom_btn_next",
        prevEl: ".custom_btn_prev"
      },
  
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }
    });
  });


  jQuery(document).ready(function($){
    let timer;
    
    // Khi hover vào menu chính
    $('.menu-item').hover(
        function() {
            clearTimeout(timer);
            $(this).children('.sub-menu').fadeIn(500);
        }, 
        function() {
            let submenu = $(this).children('.sub-menu');
            timer = setTimeout(function() {
                submenu.fadeOut(500);
            }, 500); // Đợi 300ms sau khi chuột ra
        }
    );
});
