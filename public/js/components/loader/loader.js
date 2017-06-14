class Loader {
  /*
   * Manage the display of a loader
   */
  constructor(loaderId, timeOut = 100) {
    // Grab the overlay element
    var overlay = $(`#${loaderId}`);

    // Add the listener
    $(document).ajaxStart((e) => {
      console.log("start");
      this.loaderJob = setTimeout(() => {
        overlay.fadeIn();
      }, timeOut);
    }).ajaxStop((e) => {
      console.log("stop");
      clearInterval(this.loaderJob);
      overlay.fadeOut();
    });
  }
};
