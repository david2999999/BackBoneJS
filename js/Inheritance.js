var Animal = Backbone.Model.extend({
    initialize: function () {
        console.log("An animal is created");
    },
    defaults:  {
        legs: "10"
    },
   walk: function () {
       console.log("Animal Walking");
   } 
});

var Dog = Animal.extend({       // creates a dog model with inheritance from the base Animal class
    walk: function(){           // walk method that overrides the walk method from the base class
        console.log("Dog Walking");
    }
});

var dog = new Dog({
    title: "Puppy",
    nickname: "Star"
});

dog.walk();
