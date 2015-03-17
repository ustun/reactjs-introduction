var HelloWorld = React.createClass({
  render: function () {
    return <div>Hello World</div>;
  }
})


var Greeting = React.createClass({
  render: function () {
    return (
      <div>
        <HelloWorld/>
        <HelloWorld/>
      </div>)
   }
})

React.render(<Greeting/>, document.body)
