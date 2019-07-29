'use strict';

(function () {

  // /**
  //  * Генерация свойств для "Флажка" (createOffer)
  //  * @param {number} i - берем число из переменной, и на его основе запускаем счетчик
  //  * @param {string} avatar - маленькое фото профиля автора объявления
  //  * @param {Object} offer - рента чего-то
  //  * @param {Object} Location - диапазон координат "пометки" по осям X и Y
  //  * @return {Array} pinObject - готовые данные для объекта "Флажок"
  //  */
  // var createOffer = function (i) {
  //   var offerCard = {
  //     author: {
  //       avatar: 'img/avatars/user0' + i + '.png'
  //     },

  //     offer: {
  //       type: window.formula.getRandomElementFromArray(window.vars.TYPES)
  //     },

  //     location: {
  //       x: window.formula.getRandomFromInterval(window.vars.BaseCoords.X_MIN, window.vars.BaseCoords.X_MAX),
  //       y: window.formula.getRandomFromInterval(window.vars.BaseCoords.Y_MIN, window.vars.BaseCoords.Y_MAX)
  //     }
  //   };
  //   return offerCard;
  // };

  // for (var i = 1; i <= window.vars.NO_OF_PINS; i++) {
  //   var offerObject = createOffer(i);
  //   window.vars.offerObjects.push(offerObject);
  // }


  /**
   * Передача значений коородинат главного пина в аддресную строку
   * @param {number} x - координата по горизонтали
   * @param {number} y - координата по вертикали
   */
  var setAddress = function (x, y) {
    window.vars.form.querySelector('#address').value = x + ',' + y;
  };
  var mapActive = false;
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
    mapActive = false;
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

  var onLoad = function () {
    vars timeOffers = data;
  };

  var activateMap = function () {
    mapActive = true;
    activateForm();
    window.pin.paintPin();
    window.backend.load(onLoad, window.popup.onError);
    setAddress(window.vars.BaseCoords.x, window.vars.BaseCoords.y);
  };
  // /**
  //  *  Делаем загрузку из сети
  //  */
  // var onError = function (message) {
  //   console.error(message);
  // };

  // var onSuccess = function (data) {
  //   console.log(data);
  // };

  window.core = {
    activateMap: activateMap,
    setAddress: setAddress,
    isActive: mapActive
  };
})();
