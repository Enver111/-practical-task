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
  nextVectorBlack.src = './icon/vector/vectorRightBlack.svg';
  nextVectorBlack.alt = 'vectorRightBlack';
  const nextVector = document.createElement('img');
  nextVector.src = './icon/vector/vectorRight.svg';
  nextVector.alt = 'vectorRight';
  const prevVectorBlack = document.createElement('img');
  prevVectorBlack.src = './icon/vector/vectorLeftBlack.svg';
  prevVectorBlack.alt = 'vectorLeftBlack';
  const prevVector = document.createElement('img');
  prevVector.src = './icon/vector/vectorLeft.svg';
  prevVector.alt = 'vectorLeft';
  next.appendChild(nextVectorBlack);
  prev.appendChild(prevVector);
  function updateCounter() {
    document.querySelector('.currentSlide').textContent = currentSlide;
    document.querySelector('.totalSlides').textContent = 'of ' + totalSlides;
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
  let btn = document.querySelector('.vector_block_pc');
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
  let langSelect = document.querySelector('.lang_select_pc');
  let text = document.querySelector('.england_pc');
  let language = document.querySelector('.language');
  let languages = document.querySelectorAll('.select_language_pc');
  let icon = document.querySelector('.vector_lang');
  let originalBackground = langSelect.style.background;
  let originalBorderRadius = langSelect.style.borderRadius;
  langSelect.onclick = function () {
    if (language.style.display === 'block') {
      language.style.display = 'none';
      icon.style.transform = 'rotate(0deg)';
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
function mobileSwipesCard() {
  let currentIndex = 0;
  let startX = 0;
  let isSwiping = false;
  const cards = document.querySelectorAll('.cards_wrap');
  const circles = document.querySelectorAll('.dot');
  const MIN_SWIPE_DISTANCE = 50;
  function updateSlider(index) {
    cards.forEach((card) => {
      card.style.transform = `translateX(${index * -280}px)`;
    });

    circles.forEach((circle, i) => {
      circle.style.backgroundColor = i === index ? 'black' : 'grey';
    });
  }
  function handleStart(e) {
    startX = e.touches[0].clientX;
    isSwiping = true;
  }
  function handleMove(e) {
    if (!isSwiping) return;
    const touch = e.touches[0];
    const change = startX - touch.clientX;
    if (Math.abs(change) < MIN_SWIPE_DISTANCE) {
      return;
    }
    if (change > 0) {
      swipeRight();
    } else {
      swipeLeft();
    }
    isSwiping = false;
  }
  function handleEnd() {
    isSwiping = false;
  }
  function swipeLeft() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider(currentIndex);
    }
  }
  function swipeRight() {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateSlider(currentIndex);
    }
  }
  cards.forEach((card) => {
    card.addEventListener('touchstart', handleStart);
    card.addEventListener('touchmove', handleMove);
    card.addEventListener('touchend', handleEnd);
  });
}
mobileSwipesCard();
function mobileSubscriptionCards() {
  let cardContainer = document.querySelector('.subscription_wrap');
  let card1 = document.querySelector('.subscription_cards1');
  let card2 = document.querySelector('.subscription_cards2');
  let btn1 = document.querySelector('.subscription_btns_mobile_pro');
  let btn2 = document.querySelector('.subscription_btns_mobile_ult');
  let touchStartX = 0;
  let touchEndX = 0;
  btn1.addEventListener('touchend', function () {
    card1.style.transform = 'translateX(0)';
    card2.style.transform = 'translateX(0)';
  });
  btn2.addEventListener('touchend', function () {
    card1.style.transform = 'translateX(-308px)';
    card2.style.transform = 'translateX(-308px)';
  });

  cardContainer.addEventListener('touchstart', function (event) {
    touchStartX = event.changedTouches[0].screenX;
    handleSwipe();
  });
  cardContainer.addEventListener('touchend', function (event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
  });
  function handleSwipe() {
    if (touchEndX < touchStartX) {
      card1.style.transform = 'translateX(-308px)';
      card2.style.transform = 'translateX(-308px)';
    }
    if (touchEndX > touchStartX) {
      card1.style.transform = 'translateX(0)';
      card2.style.transform = 'translateX(0)';
    }
  }
}
mobileSubscriptionCards();
function hamburgerMenu() {
  let hamb_btn = document.querySelector('.lines');
  let solutionsBlock = document.querySelector('.nav_solutin_blog');
  let hamMenu = document.querySelector('.hamburgermenu');
  let openSolution = document.querySelector('.openSolution');
  let marketplace = document.querySelector('.vector_block_marketplace');
  let marketplacesPage = document.querySelector(
    '.vector_block_marketplace_page'
  );
  let onlineStories = document.querySelector('.vector_block_online_stores');
  let lang = document.querySelector('.vector_block_hamb');
  let vector = document.querySelector('.vector_mobile');
  let vectorMr = document.querySelector('.vector_mobile_mark');
  let origHamMenu = hamMenu.style.background;
  hamb_btn.addEventListener('touchend', function () {
    this.classList.toggle('open');
    if (solutionsBlock.style.display === 'block') {
      hamMenu.style.background = origHamMenu;
      solutionsBlock.style.display = 'none';
      lang.style.display = 'none';
    } else {
      hamMenu.style.background = 'rgb(255, 255, 255)';
      solutionsBlock.style.display = 'block';
      lang.style.display = 'flex';
    }
  });
  openSolution.addEventListener('touchend', function () {
    if (
      marketplace.style.display === 'flex' &&
      marketplace.style.display === 'flex'
    ) {
      marketplace.style.display = 'none';
      onlineStories.style.display = 'none';
      vector.style.transform = 'rotate(0deg)';
    } else {
      onlineStories.style.display = 'flex';
      marketplace.style.display = 'flex';
      vector.style.transform = 'rotate(180deg)';
    }
  });
  marketplace.addEventListener('touchend', function () {
    if (marketplacesPage.style.display === 'block') {
      marketplacesPage.style.display = 'none';
      vectorMr.style.transform = 'rotate(0deg)';
    } else {
      marketplacesPage.style.display = 'block';
      vectorMr.style.transform = 'rotate(180deg)';
    }
  });
}
hamburgerMenu();
