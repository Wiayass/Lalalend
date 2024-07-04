
document.addEventListener("DOMContentLoaded", function() {
  const welcomeBox = document.querySelector('.wecmebox');
  welcomeBox.classList.add('show');

});


document.addEventListener("DOMContentLoaded", function() {
  const block1photo1 = document.querySelector('.block1photo1 img');
  block1photo1.classList.add('show');

});

document.addEventListener("DOMContentLoaded", function() {
  const block1photo2 = document.querySelector('.block1photo2 img');
  block1photo2.classList.add('show');

});


document.addEventListener("DOMContentLoaded", function() {
  const block1photo3 = document.querySelector('.block1photo3 img');
  block1photo3.classList.add('show');

});

window.addEventListener('scroll', function() {
  var block2 = document.querySelector('.block2');
  var block2Position = block2.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (block2Position < screenHeight) {
    block2.classList.add('show');
  }
});

window.addEventListener('scroll', function() {
  var block2h1text1 = document.querySelector('.block2h1text1');
  var block2h1text1Position = block2h1text1.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (block2h1text1Position < screenHeight) {
    block2h1text1.classList.add('show');
  }
});

  
window.addEventListener('scroll', function() {
  var block2h1text2 = document.querySelector('.block2h1text2');
  var block2h1text2Position = block2h1text2.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (block2h1text2Position < screenHeight) {
    block2h1text2.classList.add('show');
  }
});

window.addEventListener('scroll', function() {
  var block2img1 = document.querySelector('.block2img1 img');
  var block2img1Position = block2img1.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (block2img1Position < screenHeight) {
    block2img1.classList.add('show');
  }
});

window.addEventListener('scroll', function() {
  var block2img2 = document.querySelector('.block2img2 img');
  var block2img2Position = block2img2.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (block2img2Position < screenHeight) {
    block2img2.classList.add('show');
  }
});


window.addEventListener('scroll', function() {
  var stickerforblock2 = document.querySelector('.stickerforblock2 img');
  var stickerforblock2Position = stickerforblock2.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (stickerforblock2Position < screenHeight) {
    stickerforblock2.classList.add('show');
  }
});


window.addEventListener('scroll', function() {
  var block3 = document.querySelector('.block3');
  var block3Position = block3.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (block3Position < screenHeight) {
    block3.classList.add('show');
  }
});


window.addEventListener('scroll', function() {
  var block3h1text1 = document.querySelector('.block3h1text1 h1');
  var block3h1text1Position = block3h1text1.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (block3h1text1Position < screenHeight) {
    block3h1text1.classList.add('show');
  }
});


window.addEventListener('scroll', function() {
  var block3h1text2 = document.querySelector('.block3h1text2 h1');
  var block3h1text2Position = block3h1text2.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (block3h1text2Position < screenHeight) {
    block3h1text2.classList.add('show');
  }
});


  // Координаты вашего кафе
var cafeLocation = [43.21880906253745, 76.92841888323949]; // Замените на координаты вашего кафе

// Создаем карту, центрированную на кафе
var map = L.map('map').setView(cafeLocation, 15);

// Добавляем слой карты OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Добавляем маркер на карту
L.marker(cafeLocation).addTo(map)
    .bindPopup('Cafe Paul')
    .openPopup();

window.addEventListener('scroll', function() {
  var map = document.querySelector('.map');
  var mapPosition = map.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (mapPosition < screenHeight) {
    map.classList.add('show');
  }
});



window.addEventListener('scroll', function() {
  var block4h1text1 = document.querySelector('.block4h1text1 h1');
  var block4h1text1Position = block4h1text1.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (block4h1text1Position < screenHeight) {
    block4h1text1.classList.add('show');
  }
});


window.addEventListener('scroll', function() {
  var block4h1text2 = document.querySelector('.block4h1text2 h1');
  var block4h1text2Position = block4h1text2.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (block4h1text2Position < screenHeight) {
    block4h1text2.classList.add('show');
  }
});




window.addEventListener('scroll', function() {
  var block4photo1img = document.querySelector('.block4photo1 img');
  var block4photo1imgPosition = block4photo1img.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (block4photo1imgPosition < screenHeight) {
    block4photo1img.classList.add('show');
  }
});


window.addEventListener('scroll', function() {
  var block4photo3img = document.querySelector('.block4photo3 img');
  var block4photo3imgPosition = block4photo3img.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (block4photo3imgPosition < screenHeight) {
    block4photo3img.classList.add('show');
  }
});

window.addEventListener('scroll', function() {
  var block4photo4img = document.querySelector('.block4photo4 img');
  var block4photo4imgPosition = block4photo4img.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (block4photo4imgPosition < screenHeight) {
    block4photo4img.classList.add('show');
  }
});
