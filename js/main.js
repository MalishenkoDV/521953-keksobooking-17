'use strict';

/* Первое задание в ветке модуль3-задание1*/
var NO_OF_PINS = 8;

/* var Avatars = function () {
  for (var i = 1; i < NO_OF_PINS + 1; i++) {
    avtar: 'img/avatars/user0' + i + '.png';
  }
}; */

var Types = {
  PALACE: 'Дворец',
  FLAT: 'Квартирка',
  HOUSE: 'Хата',
  BUNGALO: 'Сарайчик'
};
/*
var Offer = [
  'PALACE',
  'FLAT',
  'HOUSE',
  'BUNGALO'
];*/

var Location = {
  X_MIN: 0,
  X_MAX: 1200,
  Y_MIN: 130,
  Y_MAX: 630
};

/**
 * Функция по произвольной выборке числа из массива
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

/**
 * Генерация свойств для "Флажка" (createPin)
 * @param {number} NO_OF_PINS - берем число из переменной, и на его основе запускаем счетчик
 * @param {string} avatar - маленькое фото профиля автора объявления
 * @param {Object} offer - рента чего-то
 * @param {Object} location - диапазон координат "пометки" по осям X и Y
 * @return {Array} pinObject - готовые данные для объекта "Флажок"
 */
var createPin = function () {
  var pinObject = {
    author: {
      avatar: 'img/avatars/user0' + i + '.png'
    },

    offer: {
      type: getRandomElementFromArray(Object.values(Types))
    },

    location: {
      x: getRandomFromInterval(Location.X_MIN, Location.X_MAX),
      y: getRandomFromInterval(Location.Y_MIN, Location.Y_MAX)
    }
  };
  return pinObject;
};
/*
var randomProperty = function (obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
*/
var pinObjects = [];

for (var i = 1; i < NO_OF_PINS; i++) {
  pinObjects[i] = createPin();
}

/* --- второе задание в ветке модуль3-задание1 --- */
var userDialog = document.querySelector('.map');
userDialog.classList.remove('map--faded');

/* --- Третье задание в ветке модуль3-задание1 --- */


/**
 * Показываем окно с параметрами мага
 */

/**
 * Поиск в темплейтах по ид
 * эллемента с нужным классом
 */
var similarPinTemplate = document.querySelector('#pin')
    .content
    .querySelector('.map__pin');

/**
 * Клонирование волшебников
 * @param {object} pinObject -- обьект данных волшебника
 * @return {object} pinElement
 */
var renderPin = function (pinObject) {
  var pinElement = similarPinTemplate.cloneNode(true);

  pinElement.querySelector('img').src = pinObject.author.avatar;
  pinElement.querySelector('img').alt = pinObject.offer.type;
  pinElement.querySelector('.map__pin').style = 'left:' + pinObject.location.x + 'px;top' +
  pinObject.location.y + 'px';

  return pinElement;
};

var similarListElement = userDialog.querySelector('.map__pins');
similarListElement.appendChild(createDocumentFragment(fragment));

/**
 * Процесс клонирования волшебников
 */
var fragment = document.createDocumentFragment();
for (var j = 0; j < pinObjects.length; j++) {
  fragment.appendChild(renderPin(pinObjects[i]));
}
similarListElement.appendChild(fragment);
/*
var fragment = document.createDocumentFragment();
pinObjects.forEach(function (pin) {
  fragment.appendChild(renderPin(pin));
});*/
/*
*/

/* Четвертое задание в ветке модуль3-задание1*/
