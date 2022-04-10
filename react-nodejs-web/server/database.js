var mongoose = require('mongoose');
var GroceryItem = require('./model/GroceryItems.js')

mongoose.connect('mongodb://localhost/grocery', function() {
    console.log('Connection established');

    mongoose.connection.db.dropDatabase();
    
   var items = 
     [ {name: "Ice" },
     { name: "waffle" },
     { name: "Candy",
     purchased: true },
     { name: "snarks" } ];

  items.forEach(function(item) {
    new GroceryItem(item).save();
  }) 
})

