"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = function () {
  /**
   * Construct the scanner application
   * @param {String} options.listID ID of results list
   */
  function List(options) {
    _classCallCheck(this, List);

    this.list = $("#" + options.listID);
  }

  /**
   * Add an item to the view
   * @param {String} content Content for item
   */


  _createClass(List, [{
    key: "addItem",
    value: function addItem(content) {
      this.list.append("<li class=\"item\">" + content + "</li>");
    }

    /**
     * Clear all items in the list
     */

  }, {
    key: "clearList",
    value: function clearList() {
      this.list.empty();
    }
  }]);

  return List;
}();

;