$(document).ready(function(){$(".mobile-btn").click(function(){$("nav ul").toggleClass("show"),$(".overlay").toggle(),$(this).toggleClass("close-sign")}),$(".overlay").click(function(){$("nav ul").toggleClass("show"),$(".overlay").toggle(),$(".mobile-btn").toggleClass("close-sign")}),$(".search").click(function(){$(".search form").toggle(),$("svg.search-one, svg.search-two").toggle()}),$(window).resize(function(){991<window.innerWidth&&($(".mobile-btn").removeClass("close-sign"),$(".overlay").hide(),$("nav ul").removeClass("show"))});var s=0;$(window).scroll(function(e){var o=$(this).scrollTop();64<o?(s<o?($("header .top-bar").addClass("fixed"),$("header .top-bar").removeClass("show")):$("header .top-bar").addClass("fixed show"),s=o):$("header .top-bar").removeClass("fixed show")}),$(".works .works-text span").click(function(){$(".works-boxs .works-box").hide(),$(this).hasClass("all")?$(".works-boxs .works-box").fadeIn():$(this).hasClass("web")?$(".works-boxs .works-box.web").fadeIn():$(this).hasClass("graphic")?$(".works-boxs .works-box.graphic").fadeIn():$(".works-boxs .works-box.photography").fadeIn()});new Swiper(".swiper-container",{slidesPerView:1,spaceBetween:300,loop:!0,autoplay:{delay:2e3},effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,o){return'<span class="'+o+'"><img src="images/client'+(e+1)+'.jpg" alt="Client Image"></span>'}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});$(".swiper-button-prev").click(function(){$(this).addClass("active-prev"),$(".swiper-button-next").removeClass("active-next")}),$(".swiper-button-next").click(function(){$(this).addClass("active-next"),$(".swiper-button-prev").removeClass("active-prev")});new Swiper(".swiper-container2",{slidesPerView:1,loop:!0,autoplay:{delay:2e3},breakpoints:{576:{slidesPerView:2,spaceBetweenSlides:30},768:{slidesPerView:3,spaceBetweenSlides:40},992:{slidesPerView:4,spaceBetweenSlides:40}}});$(".pricing .pricing-text span").click(function(){$(this).hasClass("monthly")?($(".pricing-boxs").fadeOut(function(){$(".pricing-box-text .yearly").hide(),$(".pricing-box-text .monthly").show(),$(".pricing-boxs").fadeIn()}),$(this).addClass("active").siblings(".yearly").removeClass("active")):($(".pricing-boxs").fadeOut(function(){$(".pricing-box-text .monthly").hide(),$(".pricing-box-text .yearly").show(),$(".pricing-boxs").fadeIn()}),$(this).addClass("active").siblings(".monthly").removeClass("active"))}),$(".contact-form form input, .contact-form form textarea").focus(function(){$(this).parent().addClass("focus")}),$(".contact-form form input, .contact-form form textarea").blur(function(){$(this).parent().removeClass("focus")}),$(".contact-form form .text").click(function(){$(this).siblings().focus()}),$(window).scroll(function(){$(".section").each(function(){var e;$(window).scrollTop()>$(this).offset().top-1?(e=$(this).attr("id"),$("header .top-bar nav ul li a").removeClass("active"),$('header .top-bar nav ul li a[class="'+e+'"]').addClass("active")):$(window).scrollTop()<50&&($("header .top-bar nav ul li a").removeClass("active"),$('header .top-bar nav ul li a[class="Home"]').addClass("active"))})}),100<$(window).scrollTop()?$(".go-to-top").fadeIn():$(".go-to-top").fadeOut(),$(window).scroll(function(){100<$(window).scrollTop()?$(".go-to-top").fadeIn():$(".go-to-top").fadeOut()}),$(".preloader").delay(500).fadeOut(),setInterval(function(){$("body").addClass("showscrollbar")},500)});