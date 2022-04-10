var React = require("./../../node_modules/react");
var createClass = require("./../../node_modules/create-react-class");
var action = require("./../actions/GroceryItemActionCreator.jsx")

module.exports = createClass({
    getInitialState: function(){
        return {input:""};
    },
    handleInputName: function(e) {
        this.setState({input: e.target.value});
    },
    addItem: function(e) {
        console.log("adding item!", this.state.input);
        e.preventDefault();
        action.add({
            name:this.state.input
        });
        this.setState({
            input: ''
        })

    },
    render: function() {
        return (
            <div className='grocery-addItem'>
              
              <form onSubmit={this.addItem}>
                  <input value={this.state.input} type='text' onChange={this.handleInputName}/>
                   <button> Add </button>
              </form>
            </div>
        )
    }
})