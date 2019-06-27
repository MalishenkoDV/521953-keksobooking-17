'use strict';

/* Первое задание в ветке модуль3-задание1*/
var NO_OF_PINS = 8;

var TYPES = ['place', 'flat', 'house', 'bungalo'];

var Coords = {
  X_MIN: 0,
  X_MAX: 1200,
  Y_MIN: 130,
  Y_MAX: 630
};

/**
 * Функция по произвольной выборке числа из интервала
 * @param {number} min - указывает начало диапазона
 * @param {number} max - указывает конец диапазона
 * @return {*} - переводит диапазон в начальную и конечную точки и возвращает произвольный результат.
 */
var getRandomFromInterval = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Случайное значение из массива.
 * @param {Array} arr - произвольный масив
 * @return {*} - элемент масива
 */
var getRandomElementFromArray = function (arr) {
  return arr[getRandomFromInterval(0, arr.length - 1)];
};

var disablingForm = document.querySelectorAll()
/**
 * Генерация свойств для "Флажка" (createOffer)
 * @param {number} i - берем число из переменной, и на его основе запускаем счетчик
 * @param {string} avatar - маленькое фото профиля автора объявления
 * @param {Object} offer - рента чего-то
 * @param {Object} Location - диапазон координат "пометки" по осям X и Y
 * @return {Array} pinObject - готовые данные для объекта "Флажок"
 */
var createOffer = function () {
  var offerCard = {
    author: {
      avatar: 'img/avatars/user0' + i + '.png'
    },

    offer: {
      type: getRandomElementFromArray(TYPES)
    },

    location: {
      x: getRandomFromInterval(Coords.X_MIN, Coords.X_MAX),
      y: getRandomFromInterval(Coords.Y_MIN, Coords.Y_MAX)
    }
  };
  return offerCard;
};

var offerObjects = [];
for (var i = 0; i < NO_OF_PINS; i++) {
  var offerObject = createOffer(i);
  offerObjects.push(offerObject);
}
var userDialog = document.querySelector('.map');
var similarPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

/**
 * клонирование метки из темплэйт-а и вставка в нее свойств
 * @param {object} pinObject -- обьект данных метки
 * @return {object} pinElement
 */
var renderPin = function (pinObject) {
  if (pinObject) {
    var pinElement = similarPinTemplate.cloneNode(true);
    similarPinTemplate.style = 'left:' + pinObject.location.x + 'px;top:' + pinObject.location.y + 'px';
    similarPinTemplate.querySelector('img').src = pinObject.author.avatar;
    similarPinTemplate.querySelector('img').alt = pinObject.offer.type;
  }
  return pinElement;
};

var similarListElement = userDialog.querySelector('.map__pins');
var fragment = document.createDocumentFragment();
for (var j = 0; j < offerObjects.length; j++) {
  var element = renderPin(offerObjects[j]);
  fragment.appendChild(element);
}
similarListElement.appendChild(fragment);

document.addEventListener('click', function () {
  userDialog.classList.remove('map--faded');
});
