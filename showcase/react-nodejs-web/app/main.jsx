var React = require('./../node_modules/react');
var ReactDOM = require("./../node_modules/react-dom");
var createClass = require("./../node_modules/create-react-class");
var reactRender = require("react-render");


// Only working because of browserify
var GroceryItemList = require('./components/GroceryItemList.jsx');
var GroceryItemStore = require('./../app/store/GroceryItemStore.jsx');

var initial = GroceryItemStore.getItems();

function render() {
    ReactDOM.render(<GroceryItemList items={initial} />, document.getElementById('app'));
}

GroceryItemStore.onChange(function(item){
    initial = item;
    render();
});