'use strict';

(function () {

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


  window.formula = {
    getRandomFromInterval: getRandomFromInterval,
    getRandomElementFromArray: getRandomElementFromArray
  };
})();
