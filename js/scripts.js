//Function to randomize background image on load
function randomize(){
  var random= Math.floor(Math.random() * 3) + 0;
  var bigSize = ["url('assets/HERO 1.jpg')",
                 "url('assets/HERO 2.jpg')",
                 "url('assets/HERO 3.jpg')"
                ];
  document.getElementById("random").style.backgroundImage=bigSize[random];
}

$(document).ready(function() {
  randomize();
});
