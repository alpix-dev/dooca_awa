$('.footer-logo-link').attr('href','https://cadastro.dooca.store?partner=5798d07e0e3fbe2a15715ff03873f253');
$('.footer-logo-text').remove();
$('<a style="display:block;margin-right:3rem;" href="https://www.alpix.dev?ref=awa" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" id="Camada_1" style="width: 36px; height: 17px; " viewBox="0 0 245.73 149.51" data-name="Camada 1"><defs><style>.cls-1{fill:#211915;}.cls-2{fill:url(#Gradiente_sem_nome_12);}</style><linearGradient id="Gradiente_sem_nome_12" gradientUnits="userSpaceOnUse" x1="240.57" y1="139.95" x2="198.5" y2="97.88"><stop stop-color="#9400d3" offset="0"></stop><stop stop-color="#40e0d0" offset="1"></stop></linearGradient></defs><title>Code By - www.alpix.dev</title><path class="cls-1" d="M 69.53 149.51 a 65.74 65.74 0 0 1 -35 -9.69 A 70.48 70.48 0 0 1 9.34 113.16 Q 0 96.2 0 74.48 q 0 -21 8.86 -37.86 A 69 69 0 0 1 33.39 9.9 Q 49.07 0 69.53 0 a 77.81 77.81 0 0 1 23.3 3.5 a 62.24 62.24 0 0 1 19.58 10 V 4.4 h 57.16 V 145.11 H 112.41 v -11 a 76.89 76.89 0 0 1 -20.68 11.54 A 64.76 64.76 0 0 1 69.53 149.51 Z m 17.59 -48.37 A 27 27 0 0 0 100.8 97.7 a 24.54 24.54 0 0 0 9.34 -9.41 a 27.11 27.11 0 0 0 3.37 -13.53 a 26.6 26.6 0 0 0 -3.44 -13.61 a 25.36 25.36 0 0 0 -9.34 -9.34 a 26.62 26.62 0 0 0 -13.61 -3.44 a 27 27 0 0 0 -13.6 3.44 A 25.37 25.37 0 0 0 64 61.22 a 26.25 26.25 0 0 0 -3.51 13.54 A 26.64 26.64 0 0 0 63.9 88.29 a 24.84 24.84 0 0 0 9.48 9.41 A 27.32 27.32 0 0 0 87.12 101.14 Z"></path><rect class="cls-2" x="188.56" y="87.95" width="57.17" height="57.17"></rect></svg></a>').insertBefore('.footer-logo-link');

let title_newsletter = $('.footer-newsletter h2.h2').text();
let awa_footer = $('<footer class="awa_footer"><div class="container-fluid"> <div class="row"> <div class="col menu-1"><h2>Menu</h2></div><div class="col menu-2"><h2>Social</h2></div><div class="col menu-3"><h2>'+ title_newsletter +'</h2></div></div><div class="menu-4"> </div><div class="row"> <div class="col-12 menu-5"></div></div></div></footer>');
awa_footer.insertBefore('footer');

$('.footer-navigation').appendTo('.menu-1');
$('.footer-social').appendTo('.menu-2');
$('.footer-newsletter').parent().appendTo('.menu-3');
$('.footer-logo-seo').parent().appendTo('.menu-4');
$('.footer-payment').appendTo('.menu-5');
$('.footer-newsletter > .row > div:first-child').remove();
$('.footer-newsletter .footer-submit span').text('Inscrever-se');
$('.footer-4').remove();

const el = document.querySelector(".header")
const observerMenu = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);
observerMenu.observe(el);


let awa_sobre = "<p><b>AWA é uma marca de joalheria e peças de vestir.</b><br> Nossa proposta é desenvolver peças autênticas através de poéticas. Joias contemporâneas artform. ​ Peças de vestir atemporais, pensadas com modelagens experimentais e criadas para serem únicas.</p>";
$('[aria-label="Sobre"] + .menu-dropdown .menu-dropdown-container > .row').wrap('<div class="row justify-content-between"></div>').wrap('<div class="col-3"></div>');
$('[aria-label="Sobre"] + .menu-dropdown .menu-dropdown-container > .row').append('<div class="awa_about-text col pr-5"><strong class="dropdown-title">SOBRE</strong>'+ awa_sobre +'</div>');
$('[aria-label="Sobre"] + .menu-dropdown .menu-dropdown-container > .row').append('<div class="awa_about-banner col"><img style="max-width:100%" src="https://cdn.dooca.store/6156/files/captura-de-tela-2021-08-09-171444.png?v=1628540090"/></div>');

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








$('body').css('opacity','1');  

