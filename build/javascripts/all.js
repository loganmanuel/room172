particlesJS.load('particles-js', '../particles.json', function() {
  console.log('callback - particles.js config loaded');
});

var menuButton = document.getElementById('menuButton');
var sideMenu = document.getElementById('sideMenu');
menuButton.addEventListener('click', function (e) {
    menuButton.classList.toggle('is-active');
    sideMenu.classList.toggle('is-active');
    e.preventDefault();

    $(window).scroll(function() {
      if ($(this).hasClass('is-active') ) {
        sideMenu.classList.toggle('is-active');
      }
    });


});



var socialButton = document.getElementById('socialButton');
var socialMenu = document.getElementById('socialMenu');
socialButton.addEventListener('click', function(e) {
  socialButton.classList.toggle('is-active');
  socialMenu.classList.toggle('is-active');
  e.preventDefault();
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
