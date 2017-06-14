class App {
  constructor(options) {
    // Create the loader
    this.loader = new Loader();

    // Instantiate the list
    this.list = new List({
      listID : options.listID
    });
  }

  /**
   * Render scan results
   */
  async renderResults() {
    // Get the scan results
    var results = await API.getScanResults();

    // Render the results
    results.forEach(item => {
      this.list.addItem(item);
    });
  }
};
