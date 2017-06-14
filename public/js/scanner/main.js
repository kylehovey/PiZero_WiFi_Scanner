$(() => {
  // Instantiate application
  window.app = new App({
    listID : "results"
  });

  // Render first results
  app.results.renderResults();

  /* ===== Listeners ===== */
  $("#refresh").on('click', (e) => {
    app.results.renderResults();
  });
  /* ===== Listeners ===== */
});
