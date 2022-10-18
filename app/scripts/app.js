import $ from "jquery";

$(() => {
	$(".promo__btn").on("click", () => {
		$("html, body").animate(
			{
				scrollTop: $(".content").offset().top,
			},
			500
		);
	});
});
