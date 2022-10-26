let sliders = document.querySelectorAll(".slider");

for (let i = 0; i < sliders.length; i++) {
  // Инициализация Slider.js

  // Первым параметром передаётся контейнер слайдера(в нашем случае переменная priceSlider
  // со значением document.getElementById('price')), а второй параметр - объект с параметрами слайдера
  noUiSlider.create(sliders[i], {
    // Значения начала и конца слайдера по умолчанию
    start: [0],
    // Диапазон значений
    range: {
      min: 0,
      max: 100,
    },
    // Шаг кнопки
    step: 1,
  });
}
