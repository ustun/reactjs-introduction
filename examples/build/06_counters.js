var Counter = React.createClass({displayName: "Counter",

  render: function () {
    return (
    React.createElement("div", null, 
      "You clicked ", this.props.counter, " times." + ' ' +
      "Need to click ", 10 - this.props.counter, " more times.", 
      React.createElement("button", {onClick: this.props.increment}, "Increment")
    ));
  }
});


var Counters = React.createClass({displayName: "Counters",
  getInitialState: function () {
    return {counter1: 3,  counter2: 5};
  },

  incrementCounter1: function () {
     this.setState({counter1: this.state.counter1 + 1,
                    counter2: this.state.counter2 - 1});
  },

  incrementCounter2: function () {
     this.setState({counter1: this.state.counter1 - 1,
                    counter2: this.state.counter2 + 1});
  },

  render: function () {
     return (
       React.createElement("div", null, 
        React.createElement(Counter, {counter: this.state.counter1, increment: this.incrementCounter1}), 
        React.createElement(Counter, {counter: this.state.counter2, increment: this.incrementCounter2})
      ));
  }
})


React.render(React.createElement(Counters, null), document.body);
