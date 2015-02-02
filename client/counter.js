define("counter", [], function () {
  var currentIndex = 0;
  var counterName = "counter";

  return function Counter () {
      var indexedName = counterName + "-" + currentIndex;
      currentIndex += 1;

      Session.setDefault(indexedName, 0);
      this.get = function () {
          return Session.get(indexedName);
      };
      this.increment = function () {
          Session.set(indexedName, Session.get(indexedName) + 1);
      };
  };
});
