$(function(){
  // var marker = document.querySelector('.line');
  // var item = document.querySelectorAll('.slider-nav__item');

  // function indicator(e){
  //   marker.style.left = e.offsetLeft+'px';
  //   marker.style.width = e.offsetWidth+'px';
  // }

  // item.forEach(link => {
  //   link.addEventListener('click', (e)=>{
  //     indicator(e.target);
  //   })
  // })
  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         true        // default
  }
  )
  new WOW().init();
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 921,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows:false,
            }
          }, {
            breakpoint: 750,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows:false,
            }
          },
          {
            breakpoint: 630,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows:false,
            }
          },
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows:false,
            }
          },
        ]
      });


      var sections = $('section')
      , nav = $('nav')
      , nav_height = nav.outerHeight();
    
    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();
      
      sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();
        
        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find('a').removeClass('active');
          sections.removeClass('active');
          
          $(this).addClass('active');
          nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
      });
    });
    
    nav.find('a').on('click', function () {
      var $el = $(this)
        , id = $el.attr('href');
      
      $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height
      }, 1000);
      
      return false;
    });       
    var mywindow = $(window);
    var mypos = mywindow.scrollTop();
    mywindow.on('scroll',function() {
        if(mywindow.scrollTop() > mypos)
        {
            $('.scroll__btn').fadeOut();  
        }
        else
        {
            $('.scroll__btn').fadeIn();
        }
        mypos = mywindow.scrollTop();
     });
     $('.hamburger').on('click', function(){
      $('.hamburger').toggleClass('is-active');
      $('.header__menu').toggleClass('open');
     });
     $('.header__menu-link').on('click',function(){
      $('.header__menu').removeClass('open');
     });
});
