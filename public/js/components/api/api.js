API = {
  basicGet : uri => {
    return Promise.resolve($.get(uri));
  },

  getScanResults : async () => {
    return (await API.basicGet("/api")).message;
  }
};
