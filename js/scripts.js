

$(document).ready(function() {
  let randNum = Math.floor(Math.random() * (3)+1)
$("#hero-img").attr("src",`assets/HERO ${randNum}.jpg`)
$('#hero-area').fadeIn('slow')



})


$(document).scroll(function() {

  var activation_offset = 1
var screen_height = $(window).height();

var img1pos = $('#img1').offset().top;

var img1act = img1pos - (screen_height * activation_offset)
var img2pos = $('#img2').offset().top;
var img2act = img2pos - (screen_height * activation_offset)
var img3pos = $('#img3').offset().top;
var img3act = img3pos - (screen_height * activation_offset)
var img4pos = $('#img4').offset().top;
var img4act = img4pos - (screen_height * activation_offset)
var img5pos = $('#img5').offset().top;
var img5act = img5pos - (screen_height * activation_offset)
var iframepos = $('#iframe').offset().top;
var iframeact = iframepos - (screen_height * activation_offset)
var textPos = $('#text-right').offset().top;
var textAct = textPos - (screen_height * activation_offset)
var y_scroll_pos = window.pageYOffset
var img1_in_view = y_scroll_pos > img1act;
var img2_in_view = y_scroll_pos > img2act;
var img3_in_view = y_scroll_pos > img3act; 
var img4_in_view = y_scroll_pos > img4act;
var img5_in_view = y_scroll_pos > img5act;
var iframe_in_view = y_scroll_pos > iframeact;
var text_in_view = y_scroll_pos > textAct;





  if(img1_in_view){
    $("#img1").fadeIn('slow');
  }else{
    $("#img1").fadeOut('fast');
  }


  if(img2_in_view){
    $("#img2").fadeIn('slow');
  }else{
    $("#img2").fadeOut('fast');
  }


  if(img3_in_view){
    $("#img3").fadeIn('slow');
  }else{
    $("#img3").fadeOut('fast');
  }


  if(img4_in_view){
    $("#img4").fadeIn('slow');
  }else{
    $("#img4").fadeOut('fast');
  }


  if(img5_in_view){
    $("#img5").fadeIn('slow');
  }
  else{
    $("#img5").fadeOut('fast');
  }

  if(iframe_in_view){
    $("#iframe").fadeIn('slow');
  }else{
    $("#iframe").fadeOut('fast');
  }

  if(text_in_view){
    $("#text-right").fadeIn('slow');
  }else{
    $("#text-right").fadeOut('fast');
  }
}

);
