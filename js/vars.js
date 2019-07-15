'use strict';

(function () {
  var NO_OF_PINS = 8;
  var TYPES = ['palace', 'flat', 'house', 'bungalo'];
  var Coords = {
    X_MIN: 0,
    X_MAX: 1200,
    Y_MIN: 130,
    Y_MAX: 630,
    x: 600,
    y: 315
  };
  var offerObjects = [];
  var userDialog = document.querySelector('.map');
  var pinListElement = userDialog.querySelector('.map__pins');
  var pinMain = userDialog.querySelector('.map__pin--main');

  var similarPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
  var fieldsetList = document.querySelectorAll('fieldset');
  var form = document.querySelector('.ad-form');

  var mapFilter = document.querySelector('.map__filters');
  var mapFilterSelect = mapFilter.querySelectorAll('select');


  window.vars = {
    NO_OF_PINS: NO_OF_PINS,
    TYPES: TYPES,
    Coords: Coords,
    offerObjects: offerObjects,
    userDialog: userDialog,
    similarPinTemplate: similarPinTemplate,
    pinListElement: pinListElement,
    fieldsetList: fieldsetList,
    pinMain: pinMain,
    form: form,
    mapFilter: mapFilter,
    mapFilterSelect: mapFilterSelect,
  };
})();
