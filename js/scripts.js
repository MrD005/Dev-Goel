/*!
    * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
       $(document).ready(function() {
  var $videoSrc;
  $(".video").click(function() {
    $videoSrc = $(this).data("src");
  });
  $("#portfolioModal1").on("shown.bs.modal", function(e) {
    $("#video1").attr(
      "src",
      "https://www.youtube.com/embed/IWo_iwsQWp8" + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });
  $("#portfolioModal1").on("hide.bs.modal", function(e) {
    $("#video1").attr("src", ""); // Remove the video source.
  });
});
        
        $(document).ready(function() {
  var $videoSrc;
  $(".video").click(function() {
    $videoSrc = $(this).data("src");
  });
  $("#portfolioModal2").on("shown.bs.modal", function(e) {
    $("#video2").attr(
      "src",
      "https://www.youtube.com/embed/KdjPO7EUOwA" + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });
  $("#portfolioModal2").on("hide.bs.modal", function(e) {
    $("#video2").attr("src", ""); // Remove the video source.
  });
});
        
        $(document).ready(function() {
  var $videoSrc;
  $(".video").click(function() {
    $videoSrc = $(this).data("src");
  });
  $("#portfolioModal3").on("shown.bs.modal", function(e) {
    $("#video3").attr(
      "src",
      "https://www.youtube.com/embed/k_g43LhQYvw" + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });
  $("#portfolioModal3").on("hide.bs.modal", function(e) {
    $("#video3").attr("src", ""); // Remove the video source.
  });
});
        
        $(document).ready(function() {
  var $videoSrc;
  $(".video").click(function() {
    $videoSrc = $(this).data("src");
  });
  $("#portfolioModal4").on("shown.bs.modal", function(e) {
    $("#video4").attr(
      "src",
      "https://www.youtube.com/embed/CnIIsBjWCXI" + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });
  $("#portfolioModal4").on("hide.bs.modal", function(e) {
    $("#video4").attr("src", ""); // Remove the video source.
  });
});
        
        $(document).ready(function() {
  var $videoSrc;
  $(".video").click(function() {
    $videoSrc = $(this).data("src");
  });
  $("#portfolioModal5").on("shown.bs.modal", function(e) {
    $("#video5").attr(
      "src",
      "https://www.youtube.com/embed/u_bOhfQIkRY" + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });
  $("#portfolioModal5").on("hide.bs.modal", function(e) {
    $("#video5").attr("src", ""); // Remove the video source.
  });
});
        
        $(document).ready(function() {
  var $videoSrc;
  $(".video0").click(function() {
    $videoSrc = $(this).data("src");
  });
  $("#portfolioModal0").on("shown.bs.modal", function(e) {
    $("#video0").attr(
      "src",
      "https://www.youtube.com/embed/S2qeyTLnDd8" + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });
  $("#portfolioModal0").on("hide.bs.modal", function(e) {
    $("#video0").attr("src", ""); // Remove the video source.
  });
});
        
        
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  