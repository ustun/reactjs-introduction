var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function () {
    return React.createElement("div", null, "Hello ", this.props.name)
  }
});

var Greeting = React.createClass({displayName: "Greeting",
    render: function () {
      return React.createElement("div", null, 
            React.createElement(HelloWorld, {name: "Ustun"}), 
            React.createElement(HelloWorld, {name: "Ozgur"})
       )
     }
})

React.render(React.createElement(Greeting, null), document.body)
