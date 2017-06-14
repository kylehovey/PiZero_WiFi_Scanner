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
    // Create the output
    var out = "";

    // Classes for different keys
    var style = {
      ssid : "highlight",
      mac : "highlight uppercase",
      channel : "highlight",
      rssi : "highlight"
    };

    // Populate it with keys and vals of network
    $.each(network, (key, val) => {
      out += `${key} : <span class="${style[key]}">${val}</span>, <br />`;
    });

    // Return the string without the trailing comma
    return out.slice(0, -8);
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
