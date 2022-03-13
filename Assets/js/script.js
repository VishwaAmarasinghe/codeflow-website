  //purecounter
  new PureCounter();

  new PureCounter({

    selector: '.purecounter',


    start: 0,
    end: 100,
    duration: 2,
    delay: 10,
    once: true,
    repeat: false,
    decimals: 0,
    legacy: true,
    filesizing: false,
    currency: false,
    separator: false,
  });
  //purecounter

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      300: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 20,
      },
      400: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerGroup: 1,
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerGroup: 1,
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });



  $('img[data-enlargeable]').addClass('img-enlargeable').click(function () {
    var src = $(this).attr('src');
    var modal;

    function removeModal() {
      modal.remove();
      $('body').off('keyup.modal-close');
    }
    modal = $('<div>').css({
      background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
      backgroundSize: 'contain',
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: '10000',
      top: '0',
      left: '0',
      cursor: 'zoom-out'
    }).click(function () {
      removeModal();
    }).appendTo('body');
    //handling ESC
    $('body').on('keyup.modal-close', function (e) {
      if (e.key === 'Escape') {
        removeModal();
      }
    })
  })

  $(function () {
    $("#nav-placeholder").load("layouts/nav.html");
  });

  $(function () {
    $("#footer-placeholder").load("layouts/footer.html");
  });