import AOS from "aos";
import lozad from "lozad";
import {
	setBackgroundElement,
	detectCloseElement,
	buttonToTop,
	clickScrollToDiv,
	appendCaptchaASP,
	countUpInit,
} from "./helper";
import { header } from "./header";
import { swiperInit } from "./swiper";

$(document).ready(function () {
	setBackgroundElement();
	header.init();
	swiperInit();

	// showMenu();
	// countUpInit();
	initHomeServiceToggle();

	// fancyfox popup
	document.addEventListener("DOMContentLoaded", function () {
		Fancybox.bind("[data-fancybox]", {
			dragToClose: false,
			backdropClick: false,
			template: {
				closeButton:
					'<button class="fancybox-button fancybox-button--close" title="Close"><i class="fa-duotone fa-solid fa-xmark"></i></button>',
			},
		});
	});
	console.log("ok");
});

function initHomeServiceToggle() {
	const switchBtn = document.getElementById("switchColumns");
	const colLeft = document.querySelector(".col-left");
	const colRight = document.querySelector(".col-right");
	const rightImage = document.querySelector(".col-right .image-2");
	const contentRight = colRight.querySelector(".content");
	const gap = "0.5208333333333334rem";

	// Kiểm tra phần tử cần thiết
	if (!switchBtn || !colLeft || !colRight) return;

	// Trạng thái ban đầu: col-left LỚN, col-right NHỎ (nền đen)
	let isLeftActive = true;

	// Thiết lập chiều rộng ban đầu
	colLeft.style.width = "61.458333333333336rem";
	colRight.style.width = `calc(100% - 61.458333333333336rem - ${gap})`;

	// Thêm hiệu ứng đồng bộ cho chiều rộng và background
	[colLeft, colRight].forEach((el) => {
		el.style.transition = "width 1s cubic-bezier(0.4, 0, 0.2, 1), background 0.8s ease-in-out";
	});

	switchBtn.addEventListener("click", () => {
		isLeftActive = !isLeftActive;

		if (isLeftActive) {
			// Khi click → Active `col-left` (LỚN)
			colLeft.classList.add("active");
			colRight.classList.remove("active");

			// Thay đổi chiều rộng
			colLeft.style.width = "61.458333333333336rem";
			colRight.style.width = `calc(100% - 61.458333333333336rem - ${gap})`;

			// Đổi nền trắng
			colLeft.style.background = "rgba(255, 255, 255, 0.50)";

			if (rightImage) rightImage.classList.remove("active");

			// Ẩn content của col-right
			contentRight.style.opacity = "0";
			contentRight.style.visibility = "hidden";

			// Hiện content của col-left nếu có
			const leftContent = colLeft.querySelector(".content");
			if (leftContent) {
				leftContent.style.opacity = "1";
				leftContent.style.visibility = "visible";
			}
		} else {
			// Khi click → Active `col-right` (LỚN)
			colLeft.classList.remove("active");
			colRight.classList.add("active");

			// Thay đổi chiều rộng
			colLeft.style.width = `calc(100% - 61.458333333333336rem - ${gap})`;
			colRight.style.width = "61.458333333333336rem";

			// Đổi nền đen
			colLeft.style.background =
				"linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%)";

			if (rightImage) rightImage.classList.add("active");

			// Hiện content của col-right
			contentRight.style.opacity = "1";
			contentRight.style.visibility = "visible";

			// Ẩn content của col-left nếu có
			const leftContent = colLeft.querySelector(".content");
			if (leftContent) {
				leftContent.style.opacity = "0";
				leftContent.style.visibility = "hidden";
			}
		}
	});
}

/*==================== Aos Init ====================*/
AOS.init({
	offset: 100,
});
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
