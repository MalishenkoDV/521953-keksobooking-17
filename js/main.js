'use strict';
(function () {


  /**
   * Генерация свойств для "Флажка" (createOffer)
   * @param {number} i - берем число из переменной, и на его основе запускаем счетчик
   * @param {string} avatar - маленькое фото профиля автора объявления
   * @param {Object} offer - рента чего-то
   * @param {Object} Location - диапазон координат "пометки" по осям X и Y
   * @return {Array} pinObject - готовые данные для объекта "Флажок"
   */
  var createOffer = function (i) {
    var offerCard = {
      author: {
        avatar: 'img/avatars/user0' + i + '.png'
      },

      offer: {
        type: window.formula.getRandomElementFromArray(window.vars.TYPES)
      },

      location: {
        x: window.formula.getRandomFromInterval(window.vars.Coords.X_MIN, window.vars.Coords.X_MAX),
        y: window.formula.getRandomFromInterval(window.vars.Coords.Y_MIN, window.vars.Coords.Y_MAX)
      }
    };
    return offerCard;
  };

  for (var i = 1; i <= window.vars.NO_OF_PINS; i++) {
    var offerObject = createOffer(i);
    window.vars.offerObjects.push(offerObject);
  }

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
   */
  var paintPin = function () {
    var fragment = document.createDocumentFragment();
    window.vars.offerObjects.forEach(function (offer) {
      var element = renderPin(offer);
      fragment.appendChild(element);
    });
    window.vars.pinListElement.appendChild(fragment);
  };

  /**
   * Передача значений коородинат главного пина в аддресную строку
   * @param {number} x - координата по горизонтали
   * @param {number} y - координата по вертикали
   */
  var setAddress = function (x, y) {
    window.vars.form.querySelector('#address').value = x + ',' + y;
  };

  /**
   * отключение возможности ввода данных полей формы
   */

  var deactivateForm = function () {
    window.vars.fieldsetList.forEach(function (fieldset) {
      fieldset.disabled = true;
    });
    window.vars.mapFilterSelect.forEach(function (element) {
      element.disabled = true;
    });
  };
  var deactivateMap = function () {
    window.vars.userDialog.classList.add('map--faded');
    window.vars.form.classList.add('ad-form--disabled');
    deactivateForm();
    window.vars.mapFilter.classList.add('.ad-form--disabled');
  };
  deactivateMap();
  var activateForm = function () {
    window.vars.userDialog.classList.remove('map--faded');
    window.vars.form.classList.remove('ad-form--disabled');
    window.vars.mapFilter.classList.remove('ad-form--disabled');
    window.vars.mapFilterSelect.forEach(function (element) {
      element.disabled = false;
    });
    window.vars.fieldsetList.forEach(function (fieldset) {
      fieldset.disabled = false;
    });
  };

  var activateMap = function () {
    activateForm();
    paintPin();
    setAddress(window.vars.BaseCoords.x, window.vars.BaseCoords.y);
  };
  window.main = {
    activateMap: activateMap,
    setAddress: setAddress
  };
})();
