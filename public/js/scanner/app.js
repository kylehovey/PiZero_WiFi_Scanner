"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App(options) {
  _classCallCheck(this, App);

  // Create the loader
  this.loader = new Loader("loader");

  // Instantiate the list
  this.results = new ScanResults({
    listID: options.listID,
    styles: {
      ssid: {
        key: "uppercase",
        val: "highlight"
      },
      mac: {
        key: "uppercase",
        val: "highlight uppercase"
      },
      channel: {
        key: "capitalize",
        val: "highlight"
      },
      rssi: {
        key: "uppercase",
        val: "highlight"
      }
    }
  });
};

;