var Counter = React.createClass({displayName: "Counter",
  getInitialState: function () {
    return {counter: 0};
  },

  increment: function () {
    var currentCounter = this.state.counter;
    this.setState({counter: currentCounter + 1});
   },

  render: function () {
    return (
      React.createElement("div", null, 
            "You clicked ", this.state.counter, " times." + ' ' +
            "Need to click ", 10 - this.state.sayac, " more times.", 
        React.createElement("button", {onClick: this.increment}, "Increment")
      ))
    }
});



React.render(React.createElement(Counter, null), document.body);
