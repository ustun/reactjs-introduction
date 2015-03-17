var Counter = React.createClass({

  render: function () {
    return (
    <div>
      You clicked {this.props.counter} times.
      Need to click {10 - this.props.counter} more times.
      <button onClick={this.props.increment}>Increment</button>
    </div>);
  }
});


var Counters = React.createClass({
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
       <div>
        <Counter counter={this.state.counter1} increment={this.incrementCounter1}/>
        <Counter counter={this.state.counter2} increment={this.incrementCounter2}/>
      </div>);
  }
})


React.render(<Counters/>, document.body);
