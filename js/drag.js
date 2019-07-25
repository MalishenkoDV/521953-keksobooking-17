'use strict';
(function () {

  // var pinListElement = userDialog.querySelector('.map__pins');
  // var pinMain = userDialog.querySelector('.map__pin--main');

  window.vars.pinMain.addEventListener('mousedown', function (evt) {
    window.core.activateMap();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var presentTimeCoords = {
        x: window.vars.pinMain.style.top = (window.vars.pinMain.offsetTop - shift.y) + 'px',
        y: window.vars.pinMain.style.left = (window.vars.pinMain.offsetLeft - shift.x) + 'px'
      };
      window.core.setAddress(presentTimeCoords.x, presentTimeCoords.y);
    };

    var onMouseUp = function () {
      window.core.setAddress(window.vars.BaseCoords.X_INIT, window.vars.BaseCoords.Y_INIT);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });


  window.dialog = {
  };
})();
