function randomize(){
  var random= Math.floor(Math.random() * 3) + 0;
  var bigSize = ["url('assets/hero_one.jpg')",
                 "url('assets/hero_two.jpg')",
                 "url('assets/hero_three.jpg')"];
  document.getElementById("random").style.backgroundImage=bigSize[random];
}

//$(document).ready(function() {
  // write your scripts here
//});
