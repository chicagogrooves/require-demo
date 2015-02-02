if (Meteor.isClient) {
  define("counterName", [], function(){
    return "counter";
  })

  var Counter = require("counter");
  var counter = new Counter();
  var counter = new Counter();

  Template.hello.helpers({
    counter: function () {
      return counter.get();
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      counter.increment();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
