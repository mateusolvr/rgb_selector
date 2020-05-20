window.addEventListener('load', start);

function start() {
  redColourRange = document.querySelector('#redColourRange');
  greenColourRange = document.querySelector('#greenColourRange');
  blueColourRange = document.querySelector('#blueColourRange');

  colourRange = document.getElementsByClassName('rangeInput');
  colourNumber = document.getElementsByClassName('textInput');

  for (var i = 0; i < colourRange.length; i++) {
    colourRange[i].addEventListener('change', colourHandlerRange);
  }

  for (var i = 0; i < colourNumber.length; i++) {
    colourNumber[i].addEventListener('change', colourHandlerNumber);
    colourNumber[i].addEventListener('keyup', colourHandlerNumber);
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
  modifyBoxColour();
}

function colourHandlerNumber() {
  function assignRangeValue() {
    switch (id) {
      case 'redColourNumber':
        redColourRange.value = newValue;
        break;
      case 'greenColourNumber':
        greenColourRange.value = newValue;
        break;
      case 'blueColourNumber':
        blueColourRange.value = newValue;
        break;
    }
  }

  var id = event.target.id;
  var newValue = event.target.value;
  assignRangeValue();
  modifyBoxColour();
}

function modifyBoxColour() {
  box = document.querySelector('.box');

  rgbValue =
    'rgb(' +
    redColourRange.value +
    ', ' +
    greenColourRange.value +
    ', ' +
    blueColourRange.value +
    ')';

  box.style.background = rgbValue;
}
