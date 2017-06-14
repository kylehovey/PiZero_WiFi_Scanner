"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loader =
/*
 * Manage the display of a loader
 */
function Loader(loaderId) {
  var _this = this;

  var timeOut = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  _classCallCheck(this, Loader);

  // Grab the overlay element
  var overlay = $("#" + loaderId);

  // Add the listener
  $(document).ajaxStart(function (e) {
    _this.loaderJob = setTimeout(function () {
      overlay.fadeIn();
    }, timeOut);
  }).ajaxStop(function (e) {
    clearInterval(_this.loaderJob);
    overlay.fadeOut();
  });
};

;