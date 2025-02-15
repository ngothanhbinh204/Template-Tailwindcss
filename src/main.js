// gsap.registerPlugin(ScrollTrigger);

// // Tạo animation cho timeline
// let timelineAnimation = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".timeline-container",  // Kích hoạt khi section này vào viewport
//     start: "top 70%",  // Bắt đầu khi chạm vào 70% viewport
//     toggleActions: "play none none none"  // Chỉ chạy một lần
//   }
// });

// // Làm đường line vàng chạy từ trái sang phải
// timelineAnimation.to(".timeline-progress", {
//   width: "100%", // Chạy hết chiều dài timeline
//   duration: 2, // Chạy trong 2 giây
//   ease: "power2.out"
// });

// // Lặp qua từng item để tạo hiệu ứng xuất hiện
// document.querySelectorAll(".timeline-item").forEach((item, index) => {
//   timelineAnimation.to(item, {
//     opacity: 1,
//     onStart: () => {
//       item.classList.add("active"); // Kích hoạt class "active"
//     }
//   }, "-=1.5"); // Mỗi item xuất hiện cách nhau 1.5s (để không chờ hết đường line mới chạy)
// });