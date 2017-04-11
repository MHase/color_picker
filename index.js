var red, green, blue, opacity;
document.addEventListener("DOMContentLoaded", function(event) {
  setRGB();




  // setRGB(red, green, blue, opacity);
// hexString = yourNumber.toString(16);
  $('.preview').on('click', function() {
    var copy_color = document.querySelector('#rgb');
    copy_color.select();
    document.execCommand('copy');
    copy_color.blur();

    $('.preview > span').animate({
      opacity: 1
    }, 'fast').delay(500).animate({
      opacity: 0
    }, 'fast');
  });


  $('input[type=range]').on('input', function() {
    setRGB();
  });


});

function returnColor() {
    red = $('.red_slider').val();
    green = $('.green_slider').val();
    blue = $('.blue_slider').val();
    opacity = $('.opacity_slider').val();
}


function setRGB() {
  returnColor();
  var color_rgba = "rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ")";

  $('#rgb').val(color_rgba);
  genHex();
  var gradient = 'linear-gradient(to bottom,'
  var rgba_gradient = "rgba(" + red + ", " + green + ", " + blue + ", ";
  for (var i = 1; i >= 0; i = i-0.1) {
    var temp = rgba_gradient;
    temp += Math.round(i*10)/10 + ')';
    (Math.round(i*10)/10 == 0) ? gradient += temp + ')' : gradient += temp + ', ';
  }

  $('.color').css('background', color_rgba);
  // $('body').css('background', gradient);
}

function genHex() {
  var temp = Math.round(Math.round(parseFloat(opacity)*100)/100*255);
  var hex_text = '#' + temp.toString(16) + parseInt(red).toString(16) + parseInt(green).toString(16) + parseInt(blue).toString(16);
  $('#hex').val(hex_text);
}
