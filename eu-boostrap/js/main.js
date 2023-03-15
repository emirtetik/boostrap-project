/* 
$('.f-tab-buttons button').on('click', function () {
  $('.f-tab-buttons button').removeClass('active')
  $(this).addClass('active')
  $('.f-tab').hide()
  $('#f-tab-' + $(this).data('tab-id')).fadeIn()
})


$('.faq-head').on('click', function () {
  if ($(this).parent().find('.faq-body').css('display') === "none") {
    $('.faq-item').removeClass('opened')
    $('.faq-body').slideUp()
    $('.faq-head span').css('transform', 'rotate(0deg)')
    $(this).parent().addClass('opened')
    $(this).parent().find('.faq-body').slideDown()
    $(this).find('span').css('transform', 'rotate(180deg)')
  } else {
    $('.faq-item').removeClass('opened')
    $('.faq-body').slideUp()
    $(this).find('span').css('transform', 'rotate(0deg)')
  }
})


$('#host-tabs button').on('click', function () {
  $('#host-tabs button').removeClass('active')
  $(this).addClass('active')
  $('.hosting-tab').hide()
  $('#host-tab-' + $(this).data('tab-id')).fadeIn()
})



$('#hh-tabs button').on('click', function () {
  $('#hh-tabs button').removeClass('active')
  $(this).addClass('active')
  $('.hh-tab').hide()
  $('#hh-tab-' + $(this).data('hh-tab')).fadeIn()
})


$('.hamburger-btn').on('click', function () {
  if (!$('.mobile-menu').hasClass('show')) {
    $(this).html(`<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg>`)
    $('.mobile-menu-bg').addClass('show')
    $('.mobile-menu').addClass('show')
  } else {
    $(this).html(` <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-list"
    viewBox="0 0 16 16">
    <path fill-rule="evenodd"
      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
  </svg>`)
    $('.mobile-menu-bg').removeClass('show')
    $('.mobile-menu').removeClass('show')
  }
})


$('.mobile-menu-bg').on('click', function () {
  if (!$('.mobile-menu').hasClass('show')) {
    $('.hamburger-btn').html(`<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg>`)
    $('.mobile-menu-bg').addClass('show')
    $('.mobile-menu').addClass('show')
  } else {
    $('.hamburger-btn').html(` <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-list"
    viewBox="0 0 16 16">
    <path fill-rule="evenodd"
      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
  </svg>`)
    $('.mobile-menu-bg').removeClass('show')
    $('.mobile-menu').removeClass('show')
  }
})


$('.mobile-menu ul > li > a').on('click', function () {
  if ($(this).parent().find('.drop-menu').css('display') === "none") {
    $('.drop-menu').slideUp()
    $(this).parent().find('.drop-menu').slideDown()
  } else {
    $('.drop-menu').slideUp()
  }
})
$('.blog-wrapper .row').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});
 */

$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  if (st > 10) {
    $('header').addClass('sticky')
  } else if (st < 100) {
    $('header').removeClass('sticky')
  }
});



$('header nav button').on('click', function () {
  $('.swiper-menu-bg').addClass('show')
  $('.swiper-menu').addClass('show')
  $(this).addClass('active')
})

$('.swiper-menu-bg').on('click', function () {
  $('.swiper-menu-bg').removeClass('show')
  $('.swiper-menu').removeClass('show')
  $('header nav button').removeClass('active')
})








