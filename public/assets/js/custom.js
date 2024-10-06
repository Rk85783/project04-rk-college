(function ($) {
  $(document).ready(function () {
	  $("body").addClass("js");
	  const $menu = $("#menu");
	    const $menulink = $(".menu-link");

    $menulink.click(function () {
	  $menulink.toggleClass("active");
	  $menu.toggleClass("active");
	  return false;
    });
  });

  videoPopup();

  $(".owl-carousel").owlCarousel({
	    loop: true,
	    margin: 30,
	    nav: true,
	    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
	    responsive: {
	        0: {
	            items: 1
	        },
	        550: {
	            items: 2
	        },
	        750: {
	            items: 3
	        },
	        1000: {
	            items: 4
	        },
	        1200: {
	            items: 5
	        }
	    }
  });

  $(".Modern-Slider").slick({
	    autoplay: true,
	    autoplaySpeed: 10000,
	    speed: 600,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    pauseOnHover: false,
	    dots: true,
	    pauseOnDotsHover: true,
	    cssEase: "fade",
	   // fade:true,
	    draggable: false,
	    prevArrow: "<button class=\"PrevArrow\"></button>",
	    nextArrow: "<button class=\"NextArrow\"></button>"
  });

  $("div.features-post").hover(
	    function () {
	        $(this).find("div.content-hide").slideToggle("medium");
	    },
	    function () {
	        $(this).find("div.content-hide").slideToggle("medium");
	    }
	 );

  $("#tabs").tabs();

  (function init () {
	  function getTimeRemaining (endtime) {
	    const t = Date.parse(endtime) - Date.parse(new Date());
	    const seconds = Math.floor((t / 1000) % 60);
	    const minutes = Math.floor((t / 1000 / 60) % 60);
	    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	    const days = Math.floor(t / (1000 * 60 * 60 * 24));
	    return {
	      total: t,
	      days,
	      hours,
	      minutes,
	      seconds
	    };
	  }

	  function initializeClock (endtime) {
	  var timeinterval = setInterval(function () {
	    const t = getTimeRemaining(endtime);
	    document.querySelector(".days > .value").innerText = t.days;
	    document.querySelector(".hours > .value").innerText = t.hours;
	    document.querySelector(".minutes > .value").innerText = t.minutes;
	    document.querySelector(".seconds > .value").innerText = t.seconds;
	    if (t.total <= 0) {
	      clearInterval(timeinterval);
	    }
	  }, 1000);
    }
    initializeClock(((new Date()).getFullYear() + 1) + "/1/1");
  })();
})(jQuery);
