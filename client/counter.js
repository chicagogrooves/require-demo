define("counter", [], function () {
  Session.setDefault("counter", 0);

  return {
    get: function () {
      return Session.get("counter");
    },
    increment: function () {
      Session.set("counter", Session.get("counter") + 1);
    }
  };
});
