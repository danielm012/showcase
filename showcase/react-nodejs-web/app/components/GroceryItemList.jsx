var React = require("./../../node_modules/react");
var createClass = require("./../../node_modules/create-react-class");
var GroceryItem = require('./groceryItem.jsx');
var GroceryListAddItem = require('./groceryListAddItem.jsx');
require("babel-register")

var GroceryItemList = createClass({
    render: function() {
        return (
            <div> 
                <h1>
                    Jsx combination of javascript <br/>
                    </h1>   
                    <div> 
                        {
                            this.props.items.map(function(item, index) {
                                return (
                                    // the way to access component with key  and item as input
                                     <GroceryItem item={item} key= {"item" + index}/>
                                )
                            })
                        }
                    </div>
                    <GroceryListAddItem />
           </div>
        )
    }
});

module.exports = GroceryItemList;