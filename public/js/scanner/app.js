class App {
  constructor(options) {
    // Create the loader
    this.loader = new Loader("loader");

    // Instantiate the list
    this.list = new List({
      listID : options.listID
    });
  }

  /**
   * Turn a network object into a string
   * @param {Object} network Network object
   */
  netToString(network) {
    var out = "";

    // Populate it with keys and vals of network
    $.each(network, (key, val) => {
      out += `${key} : ${val}, <br />`;
    });

    // Return the string without the trailing comma
    return out.slice(0, -2);
  }

  /**
   * Render scan results
   */
  async renderResults() {
    // Get the scan results
    var networks = (await API.basicGet("/api")).results;

    // Render the results
    networks.forEach(network => {
      this.list.addItem(`${this.netToString(network)}`);
    });
  }
};
