// Создаем изображения
function onSlider() {
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

function onPopup() {
  let popup = document.querySelector('.popup');
  let crossBtn = document.querySelector('.cross_btn');
  let mainBtn = document.querySelectorAll('.btn_boock');

  mainBtn.forEach((buttons) => {
    buttons.addEventListener('click', function () {
      popup.style.display = 'block';
    });
  });

  crossBtn.onclick = function () {
    popup.style.display = 'none';
  };
  window.onkeydown = function (event) {
    if (event.key === 'Escape') {
      popup.style.display = 'none';
    }
  };
}
onPopup();

function headerColor() {
  let header = document.querySelector('.nav_wrapper');
  let btnBoock = document.querySelector('.btn_boock');
  let btns = document.querySelectorAll('.btn');

  // Сохраняем исходные стили кнопки
  let originalStyles = {
    borderRadius: btnBoock.style.borderRadius,
    background: btnBoock.style.background,
    color: btnBoock.style.color,
    width: btnBoock.style.width,
    height: btnBoock.style.height,
    padding: btnBoock.style.padding,
  };

  let newStyles = [
    { property: 'borderRadius', value: '8px' },
    { property: 'background', value: 'black' },
    { property: 'color', value: 'white' },
    { property: 'width', value: '133px' },
    { property: 'text-align', value: 'center' },
    { property: 'padding', value: '11px 0' },
  ];

  window.onscroll = function () {
    if (window.pageYOffset > 50) {
      for (let btn of btns) {
        btn.style.fontWeight = '600';
      }
      header.style.background = 'rgb(252, 253, 254)';
      header.style.padding = '4px 24px ';
      header.style.border = '1px solid rgba(0, 0, 0, 0.1)';
      for (let i = 0; i < newStyles.length; i++) {
        btnBoock.style[newStyles[i].property] = newStyles[i].value;
      }
    } else {
      for (let btn of btns) {
        btn.style.fontWeight = '500';
      }
      header.style.background = 'none';
      header.style.padding = '4px 24px ';
      header.style.border = 'none';
      for (let prop in originalStyles) {
        btnBoock.style[prop] = originalStyles[prop];
      }
    }
  };
}
headerColor();

function onSolution() {
  let solutions = document.querySelector('.solutions');
  let btn = document.querySelector('.vector_block');
  let icon = document.querySelector('.vector');

  btn.onclick = function () {
    if (solutions.style.display === 'block') {
      solutions.style.display = 'none';
      icon.style.transform = 'rotate(0deg)';
    } else {
      solutions.style.display = 'block';
      icon.style.transform = 'rotate(180deg)';
    }
  };
}
onSolution();

function onSolutionPages() {
  let solutionsWrap = document.querySelector('.solutions_wrapp');
  let btn1 = document.querySelector('.solutions_btn_vector1');
  let btn2 = document.querySelector('.solutions_btn_vector2');
  let icon1 = document.querySelector('.icon1');
  let icon2 = document.querySelector('.icon2');
  let marketplacesPage = document.querySelector('.solutions_marketplaces_page');
  let onlineStoriesPage = document.querySelector(
    '.solutions_online_stories_page'
  );
  btn1.onclick = function () {
    if (marketplacesPage.style.display === 'block') {
      marketplacesPage.style.display = 'none';
      solutionsWrap.style.width = '235px';
      icon1.style.transform = 'rotate(0deg)';
    } else {
      solutionsWrap.style.width = '745px';
      marketplacesPage.style.display = 'block';
      onlineStoriesPage.style.display = 'none';
      icon1.style.transform = 'rotate(180deg)';
      icon2.style.transform = 'rotate(0deg)';
    }
  };
  btn2.onclick = function () {
    if (onlineStoriesPage.style.display === 'block') {
      onlineStoriesPage.style.display = 'none';
      solutionsWrap.style.width = '235px';
      icon2.style.transform = 'rotate(0deg)';
    } else {
      solutionsWrap.style.width = '745px';
      marketplacesPage.style.display = 'none';
      onlineStoriesPage.style.display = 'block';
      icon1.style.transform = 'rotate(0deg)';
      icon2.style.transform = 'rotate(180deg)';
    }
  };
}
onSolutionPages();
function textAnimation() {
  let span = document.querySelector('.animation_page_text span');
  window.addEventListener('scroll', () => {
    let t =
      window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight);
    span.style.backgroundPosition = `${-t * 230}% 0`;
  });
}

textAnimation();
