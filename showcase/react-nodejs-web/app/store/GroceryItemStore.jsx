var dispatcher = require('./../../dispatcher');
var helper = require('./../helpers/RestHelper.js');

function GroceryItemStore() {
      
    var listeners = [];
    var items = [];

    helper.get("/api/items").then(function(data){
        items = data;
        triggerListeners();
    })

    function getItems() {
        return items;
    }

    function addGroceryItem(item) {
        items.push(item);
        helper.post("/api/items", item);
        triggerListeners();
    }

    function deleteGroceryItem(item) {
        // ES6, not possible here
        /*  var index = items.findIndex(function(_item){
               return _item.name == item.name; });
        //  equivalent to the bottom equation!  */

         var index;
         items.filter(function(_item, _index) {
             if(_item.name == item.name) {
                 index = _index;
             }
         });
       items.splice(index, 1);
       triggerListeners();

       helper.del('/api/items/' + item._id);
    }

    function setGroceryItemBought(item, isBought) {
        var _item = items.filter(function(a) {
            return a.name == item.name})[0];
            item.purchased = isBought || false;
            triggerListeners();

            helper.patch('/api/items/' + item._id, item);
        }
    

    function onChange(listener) {
        listeners.push(listener);
    }

    function triggerListeners() {
        listeners.forEach(function(listener) {
            listener(items);
        })
    };

    dispatcher.register(function(event) {
        var split = event.type.split(':');
        if(split[0] === 'grocery-item') {
            switch(split[1]) {
                case "add":
                    addGroceryItem(event.payload);
                    break;

                case "delete":
                    deleteGroceryItem(event.payload);
                    break;
                case "buy":
                    setGroceryItemBought(event.payload, true);
                    break;
                case "unbuy":
                    setGroceryItemBought(event.payload, false);
            }
        }
    });

    return {
        getItems: getItems,
        onChange: onChange
    }
}

module.exports = new GroceryItemStore();