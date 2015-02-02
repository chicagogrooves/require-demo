define("hello/helpers", ["counter"], function(Counter){
  var counter = new Counter;

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
});

if (Meteor.isClient) {
  require("hello/helpers");
}
