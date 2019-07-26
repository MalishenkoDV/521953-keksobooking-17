'use strict';
(function () {
  var main = document.querySelector('main');
  var templateError = document.querySelector('#error').content.querySelector('.error');
  var cloneError = templateError.cloneNode(true);
  var errorMessage = templateError.querySelector('.error__message');
  var button = cloneError.querySelector('.error__button');
  errorMessage.textContent = 'Ошибка загрузки.';
  /**
   *  Функция закрытия окна ошибки
   */
  var closeErrorMessage = function () {
    document.addEventListener('click', function () {
      main.removeChild(cloneError);
    });
    window.map.deactivatePage();
  };
  /**
   *  Функция закрытия окна ошибки при нажатии на ESC
   * @param {object} evt
   */
  var onKeyPressOnError = function (evt) {
    if (evt.keyCode === window.variables.ESC_KEYCODE) {
      closeErrorMessage();
    }
  };
  /**
   *  Попап ошибки при отправке формы
   */
  var onError = function () {
    main.appendChild(cloneError);
    cloneError.addEventListener('keydown', onKeyPressOnError);
    document.addEventListener('click', closeErrorMessage);
    button.addEventListener('keydown', closeErrorMessage);
  };

  window.popup = {
    onError: onError
  };
})();
