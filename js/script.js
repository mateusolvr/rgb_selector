window.addEventListener('load', start);

function start() {
  modifyColour();

  redColourRange = document.querySelector('#redColourRange');
  greenColourRange = document.querySelector('#greenColourRange');
  blueColourRange = document.querySelector('#blueColourRange');

  redColourNumber = document.querySelector('#redColourNumber');
  greenColourNumber = document.querySelector('#greenColourNumber');
  blueColourNumber = document.querySelector('#blueColourNumber');

  colourRange = document.getElementsByClassName('rangeInput');
  colourNumber = document.getElementsByClassName('textInput');

  for (var i = 0; i < colourRange.length; i++) {
    colourRange[i].addEventListener('input', colourHandlerRange);
  }

  for (var i = 0; i < colourNumber.length; i++) {
    colourNumber[i].addEventListener('input', colourHandlerNumber);
  }
}

function colourHandlerRange() {
  function assignTextValue() {
    switch (id) {
      case 'redColourRange':
        redColourNumber.value = newValue;
        break;
      case 'greenColourRange':
        greenColourNumber.value = newValue;
        break;
      case 'blueColourRange':
        blueColourNumber.value = newValue;
        break;
    }
  }

  var id = event.target.id;
  var newValue = event.target.value;
  assignTextValue();
  modifyColour();
}

function colourHandlerNumber() {
  function assignRangeValue() {
    switch (id) {
      case 'redColourNumber':
        redColourNumber.value = newValue;
        redColourRange.value = newValue;
        break;
      case 'greenColourNumber':
        greenColourNumber.value = newValue;
        greenColourRange.value = newValue;
        break;
      case 'blueColourNumber':
        blueColourNumber.value = newValue;
        blueColourRange.value = newValue;
        break;
    }
  }

  var id = event.target.id;
  var newValue = event.target.value;
  if (newValue > 255) {
    newValue = 255;
  }
  if (newValue === '') {
    newValue = 0;
  }
  console.log(event);
  assignRangeValue();
  modifyColour();
}

function modifyColour() {
  box = document.querySelector('.box');

  var r = redColourRange.value;
  var g = greenColourRange.value;
  var b = blueColourRange.value;

  newRGBValue = '(' + r + ', ' + g + ', ' + b + ')';

  box.style.background = 'rgb' + newRGBValue;
  document.querySelector('#rgb-value').innerHTML = newRGBValue;
  document.querySelector('#hex-value').innerHTML = rgbToHex(r, g, b);
}

function rgbToHex(r, g, b) {
  function decToHex(decimal) {
    var hex = decimal.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }

  rHex = decToHex(parseInt(r));
  gHex = decToHex(parseInt(g));
  bHex = decToHex(parseInt(b));

  return '#' + rHex + gHex + bHex;
}
