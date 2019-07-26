'use strict';

(function () {

  var TIMEOUT = 10000; // 10s
  var STATUS_LOAD = 200;
  var URL = 'https://js.dump.academy/keksobooking/data';
  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === STATUS_LOAD) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });


    xhr.timeout = TIMEOUT; // 10s
    xhr.open('GET', URL);
    xhr.send();
  };
  window.backend = {
    load: load
  };
})();
