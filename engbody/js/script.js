$(function () {

  /* トレーナータブ押下 */
  var tabs = $('.trainer__tab');
  $('.trainer__tab').on('click', function() {
    $('.tab--active').removeClass('tab--active');
    $(this).addClass('tab--active');
    var index = tabs.index(this);
    $('.trainer__tab--content').removeClass('show').eq(index).addClass('show');
  });

  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation:{
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    }
  });
});