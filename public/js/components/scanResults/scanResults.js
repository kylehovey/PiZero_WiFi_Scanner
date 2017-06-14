class ScanResults extends List {
  /**
   * Construct the view and logic for scan results
   * @param {String} options.listID ID of results list
   * @param {Object} options.styles Styles for keys and values of data recieved
   */
  constructor(options) {
    // Construct the list
    super(options);

    // Store the styles
    this.styles = options.styles;

    // Create an API object
    this.api = new API();
  }

  /**
   * Turn a network object into an HTML string
   * @param {Object} network Network object
   */
  netToString(network) {
    // Create the output
    var out = "";

    // Populate it with keys and vals of network
    $.each(network, (key, val) => {
      var style = this.styles[key]

      out += `
        <span class="${style.key}">${key}</span> :
        <span class="${style.val}">${val}</span>, <br />`;
    });

    // Return the string without the trailing comma
    return out.slice(0, -8);
  }

  /**
   * Render scan results
   */
  renderResults() {
    // Get the scan results
    this.api.basicGet("/api").then((response) => {
      // Unpack the networks
      var networks = response.results;

      // Render the results
      networks.forEach(network => {
        this.addItem(`${this.netToString(network)}`);
      });
    });
  }
};
