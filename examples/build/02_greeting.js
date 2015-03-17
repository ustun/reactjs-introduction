var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function () {
    return React.createElement("div", null, "Hello World");
  }
})


var Greeting = React.createClass({displayName: "Greeting",
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement(HelloWorld, null), 
        React.createElement(HelloWorld, null)
      ))
   }
})

React.render(React.createElement(Greeting, null), document.body)
