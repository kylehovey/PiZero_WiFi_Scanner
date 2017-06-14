class API {
  constructor() {}

  basicGet(uri) {
    return Promise.resolve($.get(uri));
  }
};
