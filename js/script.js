/* // Получаем контейнер и тикер
const tickerContainer = document.querySelector('.ticker-container');
const ticker = document.querySelector('.ticker');
// Клонируем изображения и добавляем их в конец тикера
ticker.innerHTML += ticker.innerHTML;
// Запускаем тикер
ticker.style.animation = ticker`${ticker.offsetWidth / 100}s linear infinite`;
// Устанавливаем высоту контейнера такую же, как у тикера
tickerContainer.style.height = `${ticker.offsetHeight}px`; */

/// slider
var slideIndex = 0;
var slides = Array.from({ length: 16 });

function showSlides(n) {
  var i;
  var slidesDiv = document.getElementsByClassName('slide');
  if (n > slidesDiv.length) {
    slideIndex = slidesDiv.length;
  }
  if (n < 1) {
    slideIndex = 1;
  }
  for (i = 0; i < slidesDiv.length; i++) {
    slidesDiv[i].style.display = 'none';
  }
  slidesDiv[slideIndex - 1].style.display = 'block';
  document.getElementById('slideCounter').innerHTML = slideIndex + '/10';
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

document.addEventListener('DOMContentLoaded', (event) => {
  showSlides(slideIndex);
  document.querySelector('.prev').addEventListener('click', function () {
    plusSlides(-3);
  });
  document.querySelector('.next').addEventListener('click', function () {
    plusSlides(3);
  });
});
