let bodyText = document.querySelectorAll('.text');

window.onload = function () {
  function chooseBackgroundColor(color) {
    bodyText.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color)
  }

function chooseFontColor(color) {
  for (let index = 0; index < bodyText.length; index += 1) {
    bodyText[index].style.color = color;
  }
  localStorage.setItem('fontColor', color);
}

function chooseFontSize(size)  {
  for (let index = 0; index < bodyText.length; index += 1) {
    bodyText[index].style.fontSize = size;
  }
  localStorage.setItem('fontSize', size);
}

function chooseLineHeight(height) {
  for (let index = 0; index < bodyText.length; index += 1) {
    bodyText[index].style.lineHeight = height;
  }
  localStorage.setItem('lineHeight', height);
}

function chooseFontType(type) {
  for (let index = 0; index < bodyText.length; index += 1) {
    bodyText[index].style.fontFamily = type;
  }
  localStorage.setItem('fontFamily', type);
}

let backgroundColorButtons = document.querySelectorAll('#background-color>button');
for(let index = 0; index < backgroundColorButtons.length; index += 1) {
  backgroundColorButtons[index].addEventListener('click', function(event) {
    chooseBackgroundColor(event.target.innerHTML);
  });
}

let fontColorButtons = document.querySelectorAll('#font-color>button');
for(let index = 0; index < fontColorButtons.length; index += 1) {
  fontColorButtons[index].addEventListener('click', function(event) {
    chooseFontColor(event.target.innerHTML);
  });
}

let fontSizeButtons = document.querySelectorAll('#font-size>button');
for(let index = 0; index < fontSizeButtons.length; index += 1) {
  fontSizeButtons[index].addEventListener('click', function(event) {
    chooseFontSize(event.target.innerHTML);
  });
}

let lineHeightButtons = document.querySelectorAll('#line-height>button');
for(let index = 0; index < lineHeightButtons.length; index += 1) {
  lineHeightButtons[index].addEventListener('click', function(event) {
    chooseLineHeight(event.target.innerHTML);
  });
}

let fontFamilyButtons = document.querySelectorAll('#font-family>button')
for(let index = 0; index < fontFamilyButtons.length; index += 1) {
  fontFamilyButtons[index].addEventListener('click', function(event) {
    chooseFontType(event.target.innerHTML);
  });
}

function initialize() {
  let backgroundColor = localStorage.getItem('backgroundColor')
  if (backgroundColor)setBackgroundColor(backgroundColor)

  let fontColor = localStorage.getItem('fontColor')
  if (fontColor) setFontColor(fontColor)

  let fontSize = localStorage.getItem('fontSize')
  if (fontSize) setFontSize(fontSize)

  let lineHeight = localStorage.getItem('lineHeight')
  if (lineHeight) setLineHeight(lineHeight)

  let fontFamily = localStorage.getItem('fontFamily')
  if (fontFamily) setFontFamily(fontFamily)
}

initialize();

}