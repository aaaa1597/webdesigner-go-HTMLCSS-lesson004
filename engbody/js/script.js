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

  /* FAQのアコーディオン */
  $('.faqlist dd').hide();
  $('.faqlist dt').on('click', function(){
    $(this).toggleClass('active');
    $(this).next().slideToggle(200);
  });

  /* ページトップBtn表示/非表示 */
  var $pageTop = $('.page-top');
  $(window).scroll(function() {
    if($(this).scrollTop() > 300)
      $pageTop.fadeIn();
    else
      $pageTop.fadeOut();
  });

  /* ページトップへ戻る */
  $pageTop.on('click', function() {
    $('body,html').animate({
      scrollTop: 0
    }, 200);
    return false;
  });

});