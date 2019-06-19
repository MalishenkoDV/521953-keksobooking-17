'use strict'

/* Первое задание в ветке модуль3-задание1*/
var NO_OF_PINS = 8;

/* var Avatars = function () {
  for (var i = 1; i < NO_OF_PINS + 1; i++) {
    avtar: 'img/avatars/user0' + i + '.png';
  }
}; */

var Offer = {
  PALACE:'Дворец',
  FLAT:'Квартирка',
  HOUSE:'Хата',
  BUNGALO:'Сарайчик'
};

var Location = {
  X_MIN: 0,
  X_MAX: 1200,
  Y_MIN: 130,
  Y_MAX: 630
};

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
/* Создайте массив, состоящий из 8 сгенерированных JS объектов, которые будут описывать похожие объявления неподалёку. Структура объектов должна быть следующей:

{
  "author": {
    "avatar": строка, адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} это число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д. Адреса изображений не повторяются
    ? Как передать результат работы в объект PIN_DATAS.avatar
  },
  "offer": {
    "type": строка с одним из четырёх фиксированных значений: palace, flat, house или bungalo
  },

  "location": {
    "x": случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.
    "y": случайное число, координата y метки на карте от 130 до 630.
    ? создвать масив из диапазона координат, или переменные   присваиать каждому отдельно
  }
}*/

/**
 * Созданик объекта
 * @param {str} name - свойство "Волшебника" - полное имя, сложенное из массива имен и фамилий
 * @param {str} coatColor - свойство "Волшебника" - цвет курточки
 * @param {str} eyes - свойство "Волшебника" - цвет глаз
 * @return {Object} wizardObject - готовый объект "Волшебник"
 */
var createPin = function (NO_OF_PINS) {
  var pinObject = {
    avatar: 'img/avatars/user0' + i + '.png',
    offer: getRandomElementFromArray(Offer),
    location: {
      x:getRandomFromInterval(Location.X_MIN, Location.X_MAX),
      y:getRandomFromInterval(Location.Y_MIN, Location.Y_MAX)
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

/**
 * Случайное значение из массива.
 * @param {Array} arr - произвольный масив
 * @return {*} - элемент масива
 */
var getRandomElementFromArray = function (arr) {
  return arr[getRandomFromInterval(0, arr.length - 1)];
}

/* второе задание в ветке модуль3-задание1*/
var userDialog = document.querySelector('.map');
userDialog.classList.remove('map--faded');

/* Третье задание в ветке модуль3-задание1*/

/* Четвертое задание в ветке модуль3-задание1*/
