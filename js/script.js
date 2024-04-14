// Получаем контейнер и тикер
const tickerContainer = document.querySelector('.ticker-container');
const ticker = document.querySelector('.ticker');

// Клонируем изображения и добавляем их в конец тикера
ticker.innerHTML += ticker.innerHTML;

// Запускаем тикер
ticker.style.animation = ticker`${ticker.offsetWidth / 100}s linear infinite`;

// Устанавливаем высоту контейнера такую же, как у тикера
tickerContainer.style.height = `${ticker.offsetHeight}px`;
