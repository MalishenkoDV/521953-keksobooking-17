'use strict';

(function () {

  /**
   * клонирование метки из темплэйт-а и вставка в нее свойств
   * @param {object} pinObject -- обьект данных метки
   * @return {object} pinElement
   */
  var renderPin = function (pinObject) {
    if (pinObject) {
      var pinElement = window.vars.similarPinTemplate.cloneNode(true);
      window.vars.similarPinTemplate.style = 'left:' + pinObject.location.x + 'px;top:' + pinObject.location.y + 'px';
      window.vars.similarPinTemplate.querySelector('img').src = pinObject.author.avatar;
      window.vars.similarPinTemplate.querySelector('img').alt = pinObject.offer.type;
    }
    return pinElement;
  };

  /**
   * Функция отрисовки пинов на карте
   * ПО offerObjects проходимся методом forEach,
   * а после - вставляем значения пинов в фрагмент
   * @param {Array} offerObjects - массив объявлений загруженных по сети
   */
  var paintPin = function (offerObjects) {
    var fragment = document.createDocumentFragment();
    offerObjects.forEach(function (offer) {
      var element = renderPin(offer);
      fragment.appendChild(element);
    });
    window.vars.pinListElement.appendChild(fragment);
  };

  window.pin = {
    paintPin: paintPin,
  };
})();
