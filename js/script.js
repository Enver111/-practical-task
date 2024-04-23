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
  let langSelect = document.querySelector('.language_wrap');
  let solutionsWrapp = document.querySelector('.solutions_wrapp');

  // Сохраняем исходные стили кнопки
  let originalStyles = {
    borderRadius: btnBoock.style.borderRadius,
    background: btnBoock.style.background,
    color: btnBoock.style.color,
    width: btnBoock.style.width,
    height: btnBoock.style.height,
    margin: btnBoock.style.margin,
    padding: btnBoock.style.padding,
  };

  let newStyles = [
    { property: 'borderRadius', value: '8px' },
    { property: 'background', value: 'black' },
    { property: 'color', value: 'white' },
    { property: 'textAlign', value: 'center' },
    { property: 'marginLeft', value: '15px' },
    { property: 'padding', value: '11px 17px' },
  ];

  window.onscroll = function () {
    if (window.pageYOffset > 50) {
      for (let btn of btns) {
        btn.style.fontWeight = '600';
      }
      header.style.background = 'rgb(252, 253, 254)';
      header.style.padding = '4px 24px ';
      header.style.border = '1px solid rgba(0, 0, 0, 0.1)';
      solutionsWrapp.style.left = '218px';
      for (let i = 0; i < newStyles.length; i++) {
        btnBoock.style[newStyles[i].property] = newStyles[i].value;
      }
    } else {
      for (let btn of btns) {
        btn.style.fontWeight = '500';
      }
      header.style.background = 'none';
      solutionsWrapp.style.left = '195px';
      header.style.padding = '4px 0 ';
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

  let originalBackground = btn.style.background;
  let originalBorderRadius = btn.style.borderRadius;

  btn.onclick = function () {
    if (solutions.style.display === 'block') {
      solutions.style.display = 'none';
      icon.style.transform = 'rotate(0deg)';
      btn.style.background = originalBackground;
      btn.style.borderRadius = originalBorderRadius;
    } else {
      solutions.style.display = 'block';
      icon.style.transform = 'rotate(180deg)';
      btn.style.background = 'rgba(0, 0, 0, 0.1)';
      btn.style.borderRadius = '8px';
    }
  };
}
onSolution();

function onSolutionPages() {
  let solutionsWrap = document.querySelector('.solutions_wrapp');
  let btn1 = document.querySelector('.solutions_btn_1');
  let btn2 = document.querySelector('.solutions_btn_2');
  let icon1 = document.querySelector('.icon1');
  let icon2 = document.querySelector('.icon2');
  let marketplacesPage = document.querySelector('.solutions_marketplaces_page');
  let onlineStoriesPage = document.querySelector(
    '.solutions_online_stories_page'
  );

  let originalBackgroundBtn1 = btn1.style.background;
  let originalBorderRadiusBtn1 = btn1.style.borderRadius;
  let originalBackgroundBtn2 = btn2.style.background;
  let originalBorderRadiusBtn2 = btn2.style.borderRadius;

  btn1.onclick = function () {
    if (marketplacesPage.style.display === 'block') {
      marketplacesPage.style.display = 'none';
      solutionsWrap.style.width = '235px';
      icon1.style.transform = 'rotate(0deg)';
      btn1.style.background = originalBackgroundBtn1;
      btn1.style.borderRadius = originalBorderRadiusBtn1;
    } else {
      btn2.style.background = originalBackgroundBtn2;
      btn2.style.borderRadius = originalBorderRadiusBtn2;
      solutionsWrap.style.width = '745px';
      marketplacesPage.style.display = 'block';
      onlineStoriesPage.style.display = 'none';
      icon1.style.transform = 'rotate(180deg)';
      icon2.style.transform = 'rotate(0deg)';
      btn1.style.background = 'rgba(0, 0, 0, 0.1)';
      btn1.style.borderRadius = '8px';
    }
  };
  btn2.onclick = function () {
    if (onlineStoriesPage.style.display === 'block') {
      onlineStoriesPage.style.display = 'none';
      solutionsWrap.style.width = '235px';
      icon2.style.transform = 'rotate(0deg)';
      btn2.style.background = originalBackgroundBtn2;
      btn2.style.borderRadius = originalBorderRadiusBtn2;
    } else {
      btn1.style.background = originalBackgroundBtn1;
      btn1.style.borderRadius = originalBorderRadiusBtn1;
      solutionsWrap.style.width = '745px';
      marketplacesPage.style.display = 'none';
      onlineStoriesPage.style.display = 'block';
      icon1.style.transform = 'rotate(0deg)';
      icon2.style.transform = 'rotate(180deg)';
      btn2.style.background = 'rgba(0, 0, 0, 0.1)';
      btn2.style.borderRadius = '8px';
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

function languageSelect() {
  let langSelect = document.querySelector('.lang_select');
  let text = document.querySelector('.england');
  let language = document.querySelector('.language');
  let languages = document.querySelectorAll('.select_language');
  let icon = document.querySelector('.vector_lang');

  // Сохраняем оригинальные стили
  let originalBackground = langSelect.style.background;
  let originalBorderRadius = langSelect.style.borderRadius;

  langSelect.onclick = function () {
    if (language.style.display === 'block') {
      language.style.display = 'none';
      icon.style.transform = 'rotate(0deg)';

      // Восстанавливаем оригинальные стили
      langSelect.style.background = originalBackground;
      langSelect.style.borderRadius = originalBorderRadius;
    } else {
      language.style.display = 'block';
      langSelect.style.background = 'rgba(0, 0, 0, 0.1)';
      langSelect.style.borderRadius = '8px';
      icon.style.transform = 'rotate(180deg)';
    }
  };

  for (let btn of languages) {
    btn.onclick = function () {
      let temp = text.textContent;
      text.textContent = btn.textContent;
      btn.textContent = temp;
    };
  }
}
languageSelect();

function updateCards() {
  let index = 0;
  let cards = document.querySelectorAll('.cards_wrap');
  let dots = document.querySelectorAll('.dot');
  cards.forEach((card, i) => {
    card.style.transform = `translateX(${-index * 280}px)`;
  });
  dots.forEach((dot) => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

document.querySelector('.carousel').addEventListener('swipeleft', () => {
  index = (index + 1) % cards.length;
  updateCards();
});

updateCards();
