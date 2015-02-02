define("counter", ["counterName"], function (counterName) {
  Session.setDefault(counterName, 0);

  return {
    get: function () {
      return Session.get(counterName);
    },
    increment: function () {
      Session.set(counterName, Session.get(counterName) + 1);
    }
  };
});
