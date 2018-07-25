$(document).ready(function() {
  let randNum = Math.floor(Math.random() * (3)+1)
console.log("randNum",randNum)
$("#hero-img").attr("src",`assets/HERO ${randNum}.jpg`)
});
