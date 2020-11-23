$(document).ready(function () {
  // Mobile Nav-bar
  $('.mobile-btn').click(function () {
    $('nav ul').toggleClass('show');
    $('.overlay').toggle();
    $(this).toggleClass('close-sign');
  });

  $('.overlay').click(function () {
    $('nav ul').toggleClass('show');
    $('.overlay').toggle();
    $('.mobile-btn').toggleClass('close-sign');
  });

  $('.search').click(function () {
    $('.search form').toggle();
    $('svg.search-one, svg.search-two').toggle();
  });

  // Hide Mobile Nav-bar When Resize
  $(window).resize(function () {
    if (window.innerWidth > 991) {
      $('.mobile-btn').removeClass('close-sign');
      $('.overlay').hide();
      $('nav ul').removeClass('show');
    }
  });

  // Toggle Class Fixed and Show to Navbar When Scroll Top and Bottom
  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > 64) {
      if (st > lastScrollTop) {
        $('header .top-bar').addClass('fixed');
        $('header .top-bar').removeClass('show');
      } else {
        $('header .top-bar').addClass('fixed show');
      }
      lastScrollTop = st;
    } else {
      $('header .top-bar').removeClass('fixed show');
    }
  });

  // Works Section
  $('.works .works-text span').click(function () {
    $(".works-boxs .works-box").hide();
    if ($(this).hasClass('all')) {
      $(".works-boxs .works-box").fadeIn();
    } else if ($(this).hasClass('web')) {
      $(".works-boxs .works-box.web").fadeIn();
    } else if ($(this).hasClass('graphic')) {
      $(".works-boxs .works-box.graphic").fadeIn();
    } else {
      $(".works-boxs .works-box.photography").fadeIn();
    }
  });

  // Clients Swiper
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 300,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<img src="images/client' + (index + 1) + '.jpg" alt="Client Image">' + '</span>';
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })

  $('.swiper-button-prev').click(function () {
    $(this).addClass('active-prev')
    $('.swiper-button-next').removeClass('active-next')
  })

  $('.swiper-button-next').click(function () {
    $(this).addClass('active-next')
    $('.swiper-button-prev').removeClass('active-prev')
  })

  // Skills Swiper
  var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetweenSlides: 30
      },
      768: {
        slidesPerView: 3,
        spaceBetweenSlides: 40
      },
      992: {
        slidesPerView: 4,
        spaceBetweenSlides: 40
      }
    }
  })

  // Pricing Section
  $('.pricing .pricing-text span').click(function () {
    if ($(this).hasClass("monthly")) {
      $('.pricing-boxs').fadeOut(function () {
        $('.pricing-box-text .yearly').hide();
        $('.pricing-box-text .monthly').show();
        $('.pricing-boxs').fadeIn();
      });
      $(this).addClass('active').siblings('.yearly').removeClass('active');
    } else {
      $('.pricing-boxs').fadeOut(function () {
        $('.pricing-box-text .monthly').hide();
        $('.pricing-box-text .yearly').show();
        $('.pricing-boxs').fadeIn();
      });
      $(this).addClass('active').siblings('.monthly').removeClass('active');
    }
  });

  // Contact Section
  $('.contact-form form input, .contact-form form textarea').focus(function () {
    $(this).parent().addClass('focus');
  })
  $('.contact-form form input, .contact-form form textarea').blur(function () {
    $(this).parent().removeClass('focus');
  })

  $('.contact-form form .text').click(function () {
    $(this).siblings().focus();
  })

  // Toggle Class Active at The Top of Each Section
  $(window).scroll(function () {
    $(".section").each(function () {
      if ($(window).scrollTop() > $(this).offset().top - 1) {
        var sectionId = $(this).attr("id");
        $("header .top-bar nav ul li a").removeClass("active");
        $('header .top-bar nav ul li a[class="' + sectionId + '"]').addClass("active");
      } else if ($(window).scrollTop() < 50) {
        $("header .top-bar nav ul li a").removeClass("active");
        $('header .top-bar nav ul li a[class="Home"]').addClass("active");
      }
    });
  });

  // Show Go To Top Icon
  if ($(window).scrollTop() > 100) {
    $(".go-to-top").fadeIn();
  } else {
    $(".go-to-top").fadeOut();
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".go-to-top").fadeIn();
    } else {
      $(".go-to-top").fadeOut();
    }
  });

  // Hide The preloader Overlay
  $(".preloader").delay(500).fadeOut();
  setInterval(function () {
    $("body").addClass('showscrollbar');
  }, 500);
});