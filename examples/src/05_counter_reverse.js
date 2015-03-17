var Counter = React.createClass({
  getInitialState: function () {
    return {counter: 0};
  },

  increment: function () {
    var currentCounter = this.state.counter;
    this.setState({counter: currentCounter + 1});
   },

  render: function () {
    return (
      <div>
            You clicked {this.state.counter} times.
            Need to click {10 - this.state.sayac} more times.
        <button onClick={this.increment}>Increment</button>
      </div>)
    }
});



React.render(<Counter/>, document.body);
