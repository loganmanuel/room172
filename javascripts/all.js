particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

var menuButton = document.getElementById('menuButton');
var sideMenu = document.getElementById('sideMenu');
menuButton.addEventListener('click', function (e) {
    menuButton.classList.toggle('is-active');
    sideMenu.classList.toggle('is-active');
    e.preventDefault();
});

var socialButton = document.getElementById('socialButton');
var socialMenu = document.getElementById('socialMenu');
socialButton.addEventListener('click', function(e) {
  socialButton.classList.toggle('is-active');
  socialMenu.classList.toggle('is-active');
  e.preventDefault();
});
