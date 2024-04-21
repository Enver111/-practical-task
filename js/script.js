// Получаем контейнер и тикер
function onTicker() {}

/// slider

let width = 367;
let count = 1;
let carousel = document.querySelector('.carousel');
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');
let position = 0;
let currentSlide = 1;
let totalSlides = listElems.length;

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

// Создаем изображения
function onSlider() {
  const nextVectorBlack = document.createElement('img');
  nextVectorBlack.src = '/icon/vector/vectorRightBlack.svg';
  nextVectorBlack.alt = 'vectorRightBlack';
  const nextVector = document.createElement('img');
  nextVector.src = '/icon/vector/vectorRight.svg';
  nextVector.alt = 'vectorRight';

  const prevVectorBlack = document.createElement('img');
  prevVectorBlack.src = '/icon/vector/vectorLeftBlack.svg';
  prevVectorBlack.alt = 'vectorLeftBlack';
  const prevVector = document.createElement('img');
  prevVector.src = '/icon/vector/vectorLeft.svg';
  prevVector.alt = 'vectorLeft';

  // Добавляем изображения в кнопки
  next.appendChild(nextVectorBlack);
  prev.appendChild(prevVector);

  function updateCounter() {
    document.querySelector('.currentSlide').textContent = currentSlide;
    document.querySelector('.totalSlides').textContent = 'of ' + totalSlides;

    // Обновляем изображения в кнопках
    if (currentSlide === 1) {
      prev.firstChild.replaceWith(prevVector);
    } else {
      prev.firstChild.replaceWith(prevVectorBlack);
    }

    if (currentSlide === totalSlides) {
      next.firstChild.replaceWith(nextVector);
    } else {
      next.firstChild.replaceWith(nextVectorBlack);
    }
  }

  prev.onclick = function () {
    position += width * count;
    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px';
    if (currentSlide > 1) {
      currentSlide--;
    }
    updateCounter();
  };

  next.onclick = function () {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
    if (currentSlide < totalSlides) {
      currentSlide++;
    }
    updateCounter();
  };

  updateCounter();
}
onSlider();
