$(document).ready(function() {
  // write your scripts here
  var numImg = 3;
  var directory = 'assets/';
  var randomNumb = Math.round(Math.random() * (numImg - 1)) + 1;
  var images = new Array
                images[1] = "HERO_1.jpg",
                images[2] = "HERO_2.jpg",
                images[3] = "HERO_3.jpg",
      document.getElementById('hero').style.backgroundImage = "url(" + directory + images[randomNumb] + ")";
});
