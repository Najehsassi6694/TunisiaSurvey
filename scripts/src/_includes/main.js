console.time('loading time');
var $ = jQuery.noConflict();

/* =========================================================
 Back to top
 ============================================================ */

$(".back-top").hide();
// fade in #back-top

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('.back-top').fadeIn();
        } else {
            $('.back-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('.back-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    // /* =========================================================
    //  scrollTo
    //  ============================================================ */
    $('body').scrollspy({
        target: '.allMenu',
        offset: 200
    });
    $('.scrollTo').on('click', function () {
        $('.scrollTo').removeClass("active");

        $(this).addClass("active")
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 70
        }, 1000, function () {
            window.location.hash = hash;
        });
    });



 

/*-------------Social Media Animation-------------------*/
    var isiPad = window.matchMedia("only screen and (max-width: 1024px)");//from the resolution of iPad Pro
    if (!isiPad.matches) {
        $('.share').hover(function () {
            $(this).parent().parent().toggleClass("hoverDiv");
            $(this).parent().parent().children(".float-sm").stop(true, false, true).fadeToggle(400);
            return false;
        });
        $('.float-sm').on("hover", function (e) {
            $(this).parent().toggleClass("hoverDiv");
            $(this).parent().children(".float-sm").stop(true, false, true).fadeToggle(400);
        });

        $('.float-fb').hover(function(){
            $(".float-tw").toggleClass("hover");
        });
        $('.float-tw').hover(function(){
            $(".float-fb").toggleClass("hover");
        });
    } else {
        $('.share').click(function () {
            //$().removeClass("hoverDiv");
            $(this).parent().parent().toggleClass("hoverDiv");
            $(this).parent().parent().children(".float-sm").stop(true, false, true).fadeToggle(400);
            return false;
        });

        $('.float-fb').hover(function(){
            $(".float-tw").toggleClass("hover");
        });
        $('.float-tw').hover(function(){
            $(".float-fb").toggleClass("hover");
        });
    }

    });


/* =========================================================
 Numbers only
 ============================================================ */

function numbersOnly(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}



/* =========================================================
Search popup
 ============================================================ */
 function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }


/* =========================================================
 formValidation newsletterForm
 ============================================================ */
 $('#newsletterForm').formValidation({
    framework: 'bootstrap',
    icon: {
        valid: 'fa fa-check',
        invalid: 'fa fa-times',
        validating: 'fa fa-refresh'
    },
    err: {
        container: 'tooltip'
    },
    fields: {
        email: {
            validators: {
                notEmpty: {
                    message: "Ce champ est obligatoire"
                },
                regexp: {
                    regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                    message: 'Addresse e-mail non valide'
                }
            }
        }
       
    }
}).on('success.form.fv', function (e) {
    e.preventDefault();
    var $form = $(e.target),
            fv = $form.data('formValidation');
        $("#message-success").show("slow");
        $('html,body').animate({
                scrollTop: $("#message-success").offset().top
            },
            'slow');
        fv.resetForm(true)
});
/* =========================================================
 formValidation
 ============================================================ */
(function() {
 'use strict';
  window.addEventListener('load', function() {
   // Fetch all the forms we want to apply custom Bootstrap validation styles to
   var forms = document.getElementsByClassName('demandeForm');
   // Loop over them and prevent submission
   var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
       if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
       }
        else if (form.checkValidity() == true) {
        $("#message-success").show("slow");
        
                  
           // stop form submit only for demo
           event.preventDefault();
        }
       form.classList.add('was-validated');
      }, false);
    });
  }, false);



  window.addEventListener('load', function() {
   // Fetch all the forms we want to apply custom Bootstrap validation styles to
   var forms = document.getElementsByClassName('contactForm');
   // Loop over them and prevent submission
   var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
       if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
       }
        else if (form.checkValidity() == true) {
        $("#message-success").show("slow");
        
                  
           // stop form submit only for demo
           event.preventDefault();
        }
       form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
$('.cb-slideshow').owlCarousel({
    responsiveClass: true,
    items: 1,
    nav: true,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    navigation: true,
    pagination: true,
    autoplay: 50000,
    scrollPerPage: true,
    paginationSpeed: 1,
    loop: true,
    margin: 0,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>']
   });


/* =========================================================
 Actualités
 ============================================================ */


 $('.actu-carousel').owlCarousel({
    responsiveClass: true,
    items: 3,
    nav: true,
    dots: false,
    mouseDrag: true,
    touchDrag: true,
    navigation: true,
    pagination: true,
    autoplay: false,
    scrollPerPage: true,
    slideSpeed: 1,
    paginationSpeed: 1,
    loop: true,
    margin: 30,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1199: {
            items: 3
        }
    }
});

/* =========================================================
 Actualités
 ============================================================ */


 $('.feedback-carousel').owlCarousel({
    responsiveClass: true,
    items: 1,
    nav: true,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    navigation: true,
    pagination: true,
    autoplay: true,
    slideSpeed: 1,
    paginationSpeed: 1,
    loop: true,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>']
});


/* =========================================================
 Menu Animation
 ============================================================ */


$('.brands-carousel').owlCarousel({
    responsiveClass: true,
    items: 6,
    nav: true,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    navigation: true,
    pagination: true,
    autoplay: 2500,
    scrollPerPage: true,
    slideSpeed: 1,
    paginationSpeed: 1,
    loop: true,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
        0: {
            items: 1

        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});


