$(() => {
  // Instantiate application
  app = new App({
    listID : "results"
  });

  // Render first results
  app.renderResults();

  /* ===== Listeners ===== */
  $("#refresh").on('click', (e) => {
    app.renderResults();
  });
  /* ===== Listeners ===== */
});
