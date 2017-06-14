"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScanResults = function (_List) {
  _inherits(ScanResults, _List);

  /**
   * Construct the view and logic for scan results
   * @param {String} options.listID ID of results list
   * @param {Object} options.styles Styles for keys and values of data recieved
   */
  function ScanResults(options) {
    _classCallCheck(this, ScanResults);

    // Store the styles
    var _this = _possibleConstructorReturn(this, (ScanResults.__proto__ || Object.getPrototypeOf(ScanResults)).call(this, options));
    // Construct the list


    _this.styles = options.styles;

    // Create an API object
    _this.api = new API();
    return _this;
  }

  /**
   * Turn a network object into an HTML string
   * @param {Object} network Network object
   */


  _createClass(ScanResults, [{
    key: "netToString",
    value: function netToString(network) {
      var _this2 = this;

      // Create the output
      var out = "";

      // Populate it with keys and vals of network
      $.each(network, function (key, val) {
        var style = _this2.styles[key];

        out += "\n        <span class=\"" + style.key + "\">" + key + "</span> :\n        <span class=\"" + style.val + "\">" + val + "</span>, <br />";
      });

      // Return the string without the trailing comma
      return out.slice(0, -8);
    }

    /**
     * Render scan results
     */

  }, {
    key: "renderResults",
    value: function renderResults() {
      var _this3 = this;

      // Get the scan results
      this.api.basicGet("/api").then(function (response) {
        // Unpack the networks
        var networks = response.results;

        // Render the results
        networks.forEach(function (network) {
          _this3.addItem("" + _this3.netToString(network));
        });
      });
    }
  }]);

  return ScanResults;
}(List);

;