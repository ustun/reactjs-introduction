var HelloWorld = React.createClass({
  render: function () {
    return <div>Hello {this.props.name}</div>
  }
});

var Greeting = React.createClass({
    render: function () {
      return <div>
            <HelloWorld name={"Ustun"}/>
            <HelloWorld name={"Ozgur"}/>
       </div>
     }
})

React.render(<Greeting/>, document.body)
