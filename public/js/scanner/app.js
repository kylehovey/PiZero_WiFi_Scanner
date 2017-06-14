class App {
  constructor(options) {
    // Create the loader
    this.loader = new Loader("loader");

    // Instantiate the list
    this.results = new ScanResults({
      listID : options.listID,
      styles : {
        ssid : {
          key : "uppercase",
          val : "highlight"
        },
        mac : {
          key : "uppercase",
          val : "highlight uppercase"
        },
        channel : {
          key : "capitalize",
          val : "highlight"
        },
        rssi : {
          key : "uppercase",
          val : "highlight"
        }
      }
    });
  }
};
