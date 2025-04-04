import Swiper from "swiper";
import { Autoplay, Navigation, EffectFade, Pagination } from "swiper/modules";
/**
 * @param swiperInit
 */
export function swiperInit() {
	swiperBanner();
	swiperBannerMobile();
}
function swiperBanner() {
	const swiper = new Swiper(".swiper-home-banner", {
		slidesPerView: 1,
		modules: [Autoplay, Navigation, EffectFade, Pagination],
		loop: true,
		effect: "fade",
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		speed: 1500,
		navigation: {
			nextEl: ".home-1 .btn-next",
			prevEl: ".home-1 .btn-prev",
		},
		on: {
			slideChange: function () {
				const bullets = [...document.querySelectorAll(".swiper-pagination-bullet")];

				// Kiểm tra nếu không có bullets thì return
				if (!bullets.length) return;

				const currentIndex = this.previousIndex;
				const nextIndex = this.realIndex;

				// Sử dụng khoảng cách cố định dựa trên thiết kế
				const totalOffset = 44; // 32px (width) + 12px (margin)

				// Hoán đổi vị trí giữa bullet hiện tại và bullet tiếp theo
				if (currentIndex < nextIndex) {
					// Chuyển slide tiến
					bullets[currentIndex].style.transform = `translateX(${totalOffset}px)`;
					bullets[nextIndex].style.transform = `translateX(${-totalOffset}px)`;
				} else {
					// Chuyển slide lùi
					bullets[currentIndex].style.transform = `translateX(${-totalOffset}px)`;
					bullets[nextIndex].style.transform = `translateX(${totalOffset}px)`;
				}

				// Thêm transition
				bullets[currentIndex].style.transition = "transform 1.5s ease";
				bullets[nextIndex].style.transition = "transform 1.5s ease";

				// Reset sau khi hoàn thành animation
				setTimeout(() => {
					bullets.forEach((bullet) => {
						bullet.style.transform = "";
						bullet.style.transition = "";
					});
				}, 500);
			},
		},
	});
}

function swiperBannerMobile() {
	const swiper = new Swiper(".swiper-home-banner-mobile", {
		slidesPerView: 1,
		modules: [Autoplay, EffectFade], // Đảm bảo đã import EffectFade
		loop: true,
		effect: "fade",
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		speed: 1500,
	});
}

// function swiperHome3() {
// 	const swiper = new Swiper(".home-3-swiper", {
// 		slidesPerView: 2,
// 		spaceBetween: 16,

// 		modules: [Autoplay, Navigation],
// 		loop: true,
// 		autoplay: {
// 			delay: 3000,
// 			disableOnInteraction: false,
// 		},
// 		speed: 1500,
// 		navigation: {
// 			nextEl: ".home-3 .btn-next",
// 			prevEl: ".home-3 .btn-prev",
// 		},

// 		breakpoints: {
// 			768: {
// 				slidesPerView: 2,
// 			},
// 			1024: {
// 				slidesPerView: 3,
// 				spaceBetween: 24,
// 			},
// 			1200: {
// 				slidesPerView: 5,
// 				spaceBetween: 24,
// 			},
// 		},
// 	});
// }
