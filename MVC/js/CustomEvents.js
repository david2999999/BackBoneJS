var person = {
    name: "Mosh",

    walk: function () {                         // a method that triggers an event
        this.trigger("walking",{
            speed: 1,
            startTime : "8:00"
        });
    }
};

_.extend(person, Backbone.Events);

person.on("walking", function (e) {             // event that is triggered with the walk method
    console.log("Person is walking", e);
});

person.off("walking");                          // unsubscribe from the event
person.walk();                                  // trigger the walking event