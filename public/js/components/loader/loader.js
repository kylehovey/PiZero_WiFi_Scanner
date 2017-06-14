class Loader {
  /*
   * Manage the display of a loader
   */
  constructor(loaderId, timeOut = 100) {
    // Grab the overlay element
    var overlay = $(`#${loaderId}`);

    // Add the listener
    $(document).ajaxStart((e) => {
      overlay.fadeIn();
    }).ajaxStop((e) => {
      overlay.fadeOut();
    });
  }
};
