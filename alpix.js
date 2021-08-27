$('.footer-logo-link').attr('href','https://cadastro.dooca.store?partner=5798d07e0e3fbe2a15715ff03873f253');
$('.footer-logo-text').remove();
$('<a style="display:block;margin-right:3rem;" href="https://www.alpix.dev?ref=awa" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" id="Camada_1" style="width: 36px; height: 17px; " viewBox="0 0 245.73 149.51" data-name="Camada 1"><defs><style>.cls-1{fill:#211915;}.cls-2{fill:url(#Gradiente_sem_nome_12);}</style><linearGradient id="Gradiente_sem_nome_12" gradientUnits="userSpaceOnUse" x1="240.57" y1="139.95" x2="198.5" y2="97.88"><stop stop-color="#9400d3" offset="0"></stop><stop stop-color="#40e0d0" offset="1"></stop></linearGradient></defs><title>Code By - www.alpix.dev</title><path class="cls-1" d="M 69.53 149.51 a 65.74 65.74 0 0 1 -35 -9.69 A 70.48 70.48 0 0 1 9.34 113.16 Q 0 96.2 0 74.48 q 0 -21 8.86 -37.86 A 69 69 0 0 1 33.39 9.9 Q 49.07 0 69.53 0 a 77.81 77.81 0 0 1 23.3 3.5 a 62.24 62.24 0 0 1 19.58 10 V 4.4 h 57.16 V 145.11 H 112.41 v -11 a 76.89 76.89 0 0 1 -20.68 11.54 A 64.76 64.76 0 0 1 69.53 149.51 Z m 17.59 -48.37 A 27 27 0 0 0 100.8 97.7 a 24.54 24.54 0 0 0 9.34 -9.41 a 27.11 27.11 0 0 0 3.37 -13.53 a 26.6 26.6 0 0 0 -3.44 -13.61 a 25.36 25.36 0 0 0 -9.34 -9.34 a 26.62 26.62 0 0 0 -13.61 -3.44 a 27 27 0 0 0 -13.6 3.44 A 25.37 25.37 0 0 0 64 61.22 a 26.25 26.25 0 0 0 -3.51 13.54 A 26.64 26.64 0 0 0 63.9 88.29 a 24.84 24.84 0 0 0 9.48 9.41 A 27.32 27.32 0 0 0 87.12 101.14 Z"></path><rect class="cls-2" x="188.56" y="87.95" width="57.17" height="57.17"></rect></svg></a>').insertBefore('.footer-logo-link');

$('<div class="col-sm-12 col-md-4 col-lg-4"> <div class="row mb-4"> <div class="col"> <div class="h2 ">Social</div></div></div><div class="awa_footer-social"></div></div>').insertBefore($('.footer-contact').parent())
$('.footer-top > .container > .row > div.col-lg-4').attr('class','col-md-3');
$('.footer-top > .container > .row > div.col-lg-8').attr('class','col-md-6');
$('.footer-newsletter').insertBefore('.footer-top');
$('.footer-social').appendTo('.awa_footer-social');
$('.footer-middle').remove();
$('.footer-security .h2').parent().remove();
$('.footer-newsletter').wrap('<div class="container"></div>');
//let title_newsletter = $('.footer-newsletter h2.h2').text();
//let awa_footer = $('<footer class="awa_footer"><div class="container-fluid"> <div class="row"> <div class="col menu-1"><h2>Menu</h2></div><div class="col menu-2"><h2>Social</h2></div><div class="col menu-3"><h2>'+ title_newsletter +'</h2></div></div><div class="menu-4"> </div><div class="row"> <div class="col-12 menu-5"></div></div></div></footer>');
//awa_footer.insertBefore('footer');

//$('.footer-navigation').appendTo('.menu-1');
//$('.footer-social').appendTo('.menu-2');
//$('.footer-newsletter').parent().appendTo('.menu-3');
//$('.footer-logo-seo').parent().appendTo('.menu-4');
//$('.footer-payment').appendTo('.menu-5');
//$('.footer-newsletter > .row > div:first-child').remove();
//$('.footer-newsletter .footer-submit span').text('Inscrever-se');
//$('.footer-4').remove();

// const el = document.querySelector(".header")
// const observerMenu = new IntersectionObserver( 
//   ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
//   { threshold: [1] }
// );
// observerMenu.observe(el);


if($('.page--index').length > 0){
  window.onscroll = function() {
    if ($(window).scrollTop() > 0) {
      $('.header').addClass('is-pinned');
    }else{
      $('.header').removeClass('is-pinned');
    }        
  };
}else{
  $('.header').addClass('is-pinned');
}


let awa_sobre = "<p><b>AWA é uma marca de joalheria e peças de vestir.</b><br> Nossa proposta é desenvolver peças autênticas através de poéticas. Joias contemporâneas artform. ​ Peças de vestir atemporais, pensadas com modelagens experimentais e criadas para serem únicas.</p>";
//$('[aria-label="Sobre"] + .menu-dropdown-banner .menu-dropdown-container > .row').wrap('<div class="row justify-content-between"></div>').wrap('<div class="col-3"></div>');
$('[aria-label="Sobre"] + .menu-dropdown-banner > div > .row > div:first-child').toggleClass('col col-3');

$('<div class="awa_about-text col pr-5"><strong class="dropdown-title">SOBRE</strong>'+ awa_sobre +'</div>').insertAfter('[aria-label="Sobre"] + .menu-dropdown-banner > div > .row > div:first-child');
//$('[aria-label="Sobre"] + .menu-dropdown-banner .menu-dropdown-container > .row').append('<div class="awa_about-banner col"><img style="max-width:100%" src="https://cdn.dooca.store/6156/files/captura-de-tela-2021-08-09-171444.png?v=1628540090"/></div>');
//$('[aria-label="Sobre"]').parent().addClass('navigation-banner');
//$('[aria-label="Sobre"] + .menu-dropdown').addClass('menu-dropdown-banner w-100').removeClass('menu-dropdown');
//$('<div class="break"></div>').insertBefore('.installments .until');

$('.product-card .price.total').each(function(){
  $(this).insertBefore($(this).closest('.creditcard').find('.installments'));  
});

document.addEventListener("DOMContentLoaded", function() {
  $('.product-image img').each(function(i){
  	let url1 = $(this).attr('src').replace('_495x495+fill_ffffff+crop_center','');
    let url2 = $(this).attr('data-replacement').replace('_495x495+fill_ffffff+crop_center','');
    $(this).attr('src',url1);
    $(this).attr('data-replacement',url2);
  });
  $('.product-gallery-main img').each(function(){
  	let url1 = $(this).attr('src').replace('_620x620+fill_ffffff','');
    $(this).attr('src',url1);    
  }); 
  $('.awa_banner_circle .banner').each(function(){
    let h = $(this).innerWidth() * 1;
    $(this).css('height',h + 'px');
  });
});

window.addEventListener('load', function(event) {
    setTimeout(function(){
      $('.products-showcase, .products-related').each(function(){
        let h = $(this).find('.product-card figure img').first().innerWidth() * 1;
        $(this).find('.product-card figure').css('height',h + 'px').css('overflow-y','hidden');
      });
        
        $('.dc-gallery__item').each(function(){
          let url1 = $(this).attr('data-featured').replace('_495x495+fill_ffffff','');
          $(this).attr('data-featured',url1);    
          let url2 = $(this).attr('data-zoom').replace('_1600x1600+fill_ffffff','');
          $(this).attr('data-zoom',url2);    
      });  
        $('.product-gallery-main img').each(function(){
        let url1 = $(this).attr('src').replace('_620x620+fill_ffffff','').replace('_1600x1600+fill_ffffff','');
        $(this).attr('src',url1);    
          
    }); 

    $('.awa_banner_circle .banner').each(function(){
      let h = $(this).innerWidth() * 1;
      $(this).css('height',h + 'px');
    });
  }, 100);
  
  if($('.page--product').length > 0 && window.innerWidth > 990){
    let h = $('.header').innerHeight() + 100;
    console.log(h)
    $('.product-info-content').css('top',h + 'px!important');
  }
});

window.addEventListener('resize', function(event) {
  setTimeout(function(){    
    $('.awa_banner_circle .banner').each(function(){
      let h = $(this).innerWidth() * 1;
      $(this).css('height',h + 'px');
    });
}, 100);
});

$('body').append('<a id="whatsapp-button" class="btn btn-lg svg-btn" role="button" href="https://wa.me/5521995179008" target="_blank"><i class="icon icon-whatsapp"></i></a>');

$('.awa_text_outside .banner').each(function(){
  let oObj = $(this).find('.banner-link').clone();
  oObj.find('.banner-mask').remove();
  oObj.attr('class','outside_title');
  oObj.find('.banner-info').removeAttr('class');
  //oObj.find('.banner-info').attr('class','animate__animated animate__fadeInLeft');
  animeWhenVisible(oObj,'animate__fadeInLeft')
  $(this).find('.banner-info').remove();
  oObj.insertAfter($(this).closest('.p-2'));
});
$('.awa_banner_right.apx_animate').each(function(){
  animeWhenVisible($(this).find('.carousel-info'),'animate__fadeInRight');
  animeWhenVisible($(this).find('.banner-info'),'animate__fadeInRight');
});
// $('.apx_animate').each(function(){
//   animeWhenVisible($(this).find('.carousel-info'),'animate__fadeInLeft');
// });
if($('.page--index').length > 0){
  $('.navigation .navigation-item').mouseover(function(){
      $('.header').addClass('is-pinned');
  })
  $('.navigation .navigation-item').mouseout(function(){
    if ($(window).scrollTop() > 0) {
      $('.header').addClass('is-pinned');
    }else{
      $('.header').removeClass('is-pinned');
    }   
  })
}
$.fn.isOnScreen = function(){
  var win = $(window);
  var viewport = {
      top : win.scrollTop(),
      left : win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();
  
  try{
    var bounds = $(this).offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
  }catch(e){
    
  }

  return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};


function animeWhenVisible(oObj, animation){
  window.addEventListener('scroll', function (event) {
    if(oObj.isOnScreen() === true && !oObj.hasClass(animation)) {
      //setTimeout(function(){
        oObj.addClass(animation).addClass('animate__slow').addClass('animate__animated');
      //}, 500);
    }  
  });
  window.addEventListener('load', function (event) {
    if(oObj.isOnScreen() === true && !oObj.hasClass(animation)) {
      //setTimeout(function(){
        oObj.addClass(animation).addClass('animate__slow').addClass('animate__animated');
      //}, 500);
    }  
  });
}

$('.awa_vantagens a').each(function(){
  $(this).attr('href','#');
  let tags = $(this).html().replace('[b]','<b style="white-space: break-spaces;"> ').replace('[/b]',' </b>');
  $(this).html(tags);
});

$('.page--page .page > .container > div:first-child').remove();
$('.page--page .page > .container > div:first-child > div').attr('class','col-12');
$('.page--page .page .page-navigation').parent().remove();
$('.page--page .page .page-article').parent().attr('class','col-12')
if ($('.page--page #awa-sobre').length > 0){$('.page-title').closest('.row').remove()}


let cat_slug = window.location.pathname.replace('/','');
console.log(banners_das_categorias);

if(banners_das_categorias[cat_slug] != undefined){
    $('<div class="row mt-3 custom-banners justify-content-between align-items-center"></div>').appendTo('.collection-banner > .container-fluid');          
    $.each(banners_das_categorias[cat_slug], function(k, i){
        $('<div class="text-center align-items-center my-4 col-md-4 col-xs-6 collection-minibanner" style="background-image:url('+ i.imagem +');"><a class="d-block" href="'+ i.link +'"><img src="'+ i.imagem +'"/></a></div>').appendTo('.custom-banners');
    });
}	


if($('.page--collection').length > 0 && $('.collection-banner.col-12').length > 0 && $('.collection-seo').length > 0){
  let catTitle = $('.collection-banner.col-12 img').attr('alt');
  $('.collection-banner.col-12').closest('.col-12').attr('class','collection-banner col-md-4 col-12');
  $('.collection-seo').insertAfter('.collection-banner.col-md-4');
  $('.collection-seo').wrap('<div class="col awa-collection-content"></div>');
  let removeThis = $('h1.h1').parent();
  $('h1.h1').prependTo('.awa-collection-content');
  removeThis.remove();
}



$('body').css('opacity','1');  

