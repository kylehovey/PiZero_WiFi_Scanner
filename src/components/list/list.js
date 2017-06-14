class List {
  /**
   * Construct the scanner application
   * @param {String} options.listID ID of results list
   */
  constructor(options) {
    this.list = $(`#${options.listID}`);
  }

  /**
   * Add an item to the view
   * @param {String} content Content for item
   */
  addItem(content) {
    this.list.append(`<li class="item">${content}</li>`);
  }

  /**
   * Clear all items in the list
   */
  clearList() {
    this.list.empty();
  }
};
