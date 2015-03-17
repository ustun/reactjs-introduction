# Introduction to React.js

See the presentation at react_js_barcelona_js.key

See the examples in the examples directory.

Run make to regenerate javascript files from jsx files.

React.js is a library for building user interfaces, built by Facebook and
Instagram. In building user interfaces, MVC, model-view-controller design
pattern is used a lot. React could be thought of as the view in MVC; however we
will see that it is much more than that.

## History

Let me start with history of React. When Facebook acquired Instagram, Instagram
didn't have a web site. The Instagram engineers wnanted to use the internal
library that Facebook was using for comments and ads. After some work, the
internal dependencies were cleared up and the library was open sourced in May
2013 at JSConf.

Initially, there was heavy suspicion against React. At that conference, people
were mentioning that Facebook was rethinking all the best practices and making a
soup of JS and HTML. Later on, however, it was observed by many that the library
makes complex systems simpler to build and nowadays a lot of companies including
Netflix, Airbnb, Khan Academy are making use of React in their products.

## Difficulties of Building User Interfaces in Big Applications

We can summarize the basic goal of React as follows: To build applications where
data changes over time in a simple and fast manner.

Usually it is not an easy job to create interface, but why exactly is that?
Let's consider about a server-side web system. We pull the data out of the
database, then feed that data to a template later and finally we have the HTML
output. In many applications, for example in PHP, Django or Rails, this is an
easy operation. We can abstract this operation as a function that takes some
data and outputs some HTML.

However when we consider clientside interfaces, things become more difficult. Is
the language JavaScript at fault here? Is that the real source of difficulty?

Actually until a few years ago, many people thought like that. After all,
JavaScript was a language that was invented in just 10 days by Brendan Eich. It
has its fair share of weirdness or corner cases.

However, as Douglas Crockford explains in his book JavaScript the Good Parts,
although JavaScript looks like C, beneath that clothing lies a Lisp, a flexible
and functional language. The weirdnesses in the language have been more or less
fixed over time, with standards like ES6 or projectls like CoffeeScript or
underscore which supports functional paradigms.

So, if the main difficulty in building user interfaces is not the language, what
is it? When we examine big applications and compare serverside and clientside
interfaces, we see that the main difficulty lies in managing the data that
changes over time. Let's think about a server side application, we received the
data from the database, then sent it to the rendering pipeline. During this
operation, we can assume that the data is not changing at all.

However on clientside, things do not work that way. For example the user has
opened the browser and application, the data is constantly in change after that
point and the synchronization problem between the view and data occurs. If the
same data is being displaying in multiple view locations, this becomes an even
more complex issue.

Let's think about a chat application. It should show a list of our online
friends and the number of onlinke friends. Let's say another of our friends
became online. If we don't use any user interface library here, there are two
changes we need to make: First we should append the name of our friend to the
list, then we need to increment the number at the top. That is, we have to make
a partial change, a patch in view. Even if this looks like a simple example,
most of the problems in interface building are due to this catchup game between
data and view. Some data changes in an application, and it is the job of the
programmer to ensure that the data in the view has to be updated as well.

## React's Main Philosophy: Re-render All the Time

At this point, we can introduce React's principal philosophy: Rather than
manually patching the view at each data change, let's re-render the view each
time. That is, instead of thinking of the changes we are going to make in view,
let's just make a change in the data, and the view should be rendered from
scratch as if we have refreshed the page. This way, there is never a mismatch
between data and view.

Of course, this all sounds so nice, however at this point, you might have some
questions about how this works: For example, let's say we have a list of 100
people, we add a single person to this list; we now need to make a list of 101
people. If we do this naively, that means we have to throw away the already
existing 100 person list and we will have to build a list of 101 people from
scratch. Wouldn't that be too slow?

React's job as a library is exactly this. As the user, you need to focus on data
and how it will be viewed, the library will take care of the task of making view
changes efficiently. That is, while building the list of 101 people, it computes
the changes required in the view and makes these changes to the view. The
concept that React uses for this is called the virtual DOM. React keeps the view
elements in a data structure called virtual DOM and if there are any changes, it
first changes this data structure. This way, it can find optimally which HTML
elements need to be added to or removed from the page.

Therefore, we can summarize React's first principle as follows: The user has to
basically focus on the data structure behind the user interface and the changes
in it and needs to define how this data will be rendered just once.

## React's Second Principle: Components

Let's talk about React's second principle now. According to React, it should be
our main aim to make components while building user interfaces; that is we have
to dissect or analyze the interface in terms of components. Let's think that we
have an HTML template ready, for example an address book. To implement this, we
should separate this into smaller components. For example, the component at the
top is a search component, below each letter with people in it is a Page
component, each address line is an Address component.

With this abstraction, we are making bigger Lego blocks out of the smaller Lego
blocks we have and in the end, we have the biggest LEego block, our application.

We can compare this to creating functions composed of multiple expressions. Just
like we can create new functions that use these existing functions, we can
create compound components that make use of simple components. This way, we have
reusable, composable units with clearly defined interfaces. In React
terminology, this basic unit is called a component.


### A Simple Component: HelloWorld

Let's give an example as to how components are created and used. In order to
create a React component, we call `React.createClass' with a simple object
literal called the spec. Within this object, we define how the component will be
rendered in the `render' metho.d Let's define a `HelloWorld' component.


```js
var HelloWorld = React.createClass({
  render: function () {
    return <div>Hello World</div>;
  }
})
```

Here, React is actually just using JavaScript language, this is not a templating
language. The only difference is that it allows HTML-like syntax called JSX. JSX
is an optional transpiler technology, the only thing it does is to convert these
tags to JavaScript function calls. For example, it converts `<div>Hello
World</div>` to `React.createElement("div", null", "Hello World")` function
invocation.

After we define this component, in order to show it on the page, we have to
mount it to an empty element that already exists on the page. For this, we use
`React.render' method, for example, to mount to the `body' element, we use
`React.render(<HelloWorld/>, document.body)`. The element to mount could have
been any other HTML element instead of `body`.

As you can see, using the already defined `div` component in HTML, we create a
new component called `HelloWorld' and we can now use it as if such a component
existed natively in HTML.


### A Compound Component: Greeting

Let's take this one step further and create a compound component using this
simple component. For example, let's make a `Greeting' component that will
display "Hello World" twice. To create a `Greeting' component, we have to have a
`render' method in `React.createClass' that uses `HelloWorld' twice. Then, we
can mount the `Greeting' component to the `body' using `React.render'.

```js
var Greeting = React.createClass({
  render: function () {
    return (
      <div>
        <HelloWorld/>
        <HelloWorld/>
      </div>)
   }
})
```

As you can see, we can use the `HelloWorld' component in another
component. Let's take this a step further, let's say the `HelloWorld' component
takes the name of the person to say hello to, as a parameter and it displays
this person's name.

Just like the input parameters of functions, a React component can take a
paramenter set through an object called `props', short for properties. `props'
can be accessed in the `render' method. Now let's rewrite `HelloWorld` using
props: bileşenini bu şekilde yeniden yazalım:

```js
var HelloWorld = React.createClass({
  render: function () {
    return <div>Hello {this.props.name}</div>
  }
})
```

The curly braces here { } are again an addition React makes to
JavaScript. Behind the scenes, the things inside the braces are convererted to
function parameters. For example, instead `<div>Hello {this.props.name}</div>`
we could have written `React.createElement("div", null, "Hello",
this.props.name)`.

Now let's rewrite `Greeting` component so that it passes the name parameter to
`HelloWorld` component:

```js
var Greeting = React.createClass({
    render: function () {
      return <div>
         <HelloWorld name="Üstün"/>
         <HelloWorld name="Özgür"/>
       </div>
     }
})
```

Now we have a reusable component called `HelloWorld', whose interface is clearly defined.

### Data change

While talking about React's principal philosophy, we had mentioned that React
shines in applications where data changes over time. However the examples we
have given so far have all static data, so we haven't seen React's this part in
action. To exemplify the change in data, let's think of a Counter component.

When we think about the variables in the Counter component, the only variable is
a number called counter. In React, variables are collected in an object called
`state'. Just like there is an object called `props' to collect the parameters
sent from the parent to the child, the child itself has an object called `state'
for tracking its changes. To give the initial value for this state, the method
we have to implement is called `getInitialState'. After we do this, we can
access the state variables in the `render' method.

```js
var Counter = React.createClass({
    getInitialState: function () {
      return {counter: 0};
    },

    render: function () {
         <div>You have clicked {this.state.counter} times.</div>
    }
})
```

Now let's add a button that will increment the counter.

```js
var Counter = React.createClass({
  getInitialState: function () {
    return {counter: 0};
  },

  render: function () {
    return (
      <div>
        You have clicked {this.state.counter} times.
        <button>Increment</button>
      </div>);
    }
})
```

Our aim is to increment the counter once each time we click this button. For
this, we have to add an `onClick' handler function and within this function, we
have to increment the counter variable in `state'.

```js
var Counter = React.createClass({

    getInitialState: function () {
      return {counter: 0};
    },

    increment: function () {
        // What should we write here?
    },

    render: function () {
      return (
        <div>
          You have clicked {this.state.counter} times.
          <button onClick={this.increment}>Increment</button>
        </div>;
    }
})
```

When handling state, React has a different point of view. Every state change has
to be through a method called `setState', through this method, React can see
that something in the system has changed and `render' method has to be run
again.

```js
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
        You have clicked {this.state.counter} times.
        <button onClick={this.increment}>Increment</button>
      </div>)
    }
})
```

If we compare with AngularJS, in AngularJS, there is no equivalent for setState,
you make the changes directly in the data structure. Therefore to see if
something has changed in the application, Angular runs a code section called the
digest loop. This loop might cause performance issues in some applications and
more importantly might make it harder to reason about your code.

In React however, all the state changes are explicit. According to React, state
changes form the most difficulty in application development, hence every change
has to be done through setState.

Now let's improve our counter example, for example, the counter should be
counting down from 10 while counting up from 0 and the two numbers have to be
connected. That is, if we click 3 times, it should say "You have clicked 3
times. You have to click 7 more times." How many different variables should we
have here? This is the question we should be asking ourselves all the time when
implementing React application. How and where should I be storing the data?

Although there are two different data are going to be viewed in this
application, we should observe that at the root, there is only a single counter
value. Hence, in state, we just have to record how many times the counter has
been clicked. In React applications, we have to think about root data and
derived data. There is a single root value here; but two derived values. We
should be storing the single value in state and calculate the derived data in
render method.

With these changes, let's rewrite our Counter example:

```js
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
      You have clicked {this.state.counter} times.
      You have to click {10 - this.state.counter} more times.
      <button onClick={this.increment}>Increment</button>
    </div>
    );
  }
})
```

As you can see, the `render` method gives us information as to how the view will
appear at any point in time. That is, render does not generate a view that is
initially rendered and that has to be manually patched. It gives the correct
view at any time.

### Root Component-Child Component Communication

Lastly, let's see how a child component can communicate with an owner component.
For example, let's say we now have two counters that work together, clicking one
should increment it and decrement the other, and vice versa. Now we should be
thinking about where to store the state. Should child components have their own
state or should the owner component has a single state that it passes to child
as props?

We will return back to this question, but let's first turn back to the chat
application and ask the same question there.  Here, should we be storing the
friend list in which component, in the main component, in the component that
shows the number of online friends or in the component that shows the names of
online friends? Since we need the same data in both the name list and number
component, it makes more sense to have the data at the top and let it flow
downwards.

Let's return back to the Counter application. Again, the data should be
concentrated in the parent component and passed as props downward to the child
components. Another advantage of this is that the data is centralized in a
common location as in databases. This way, the child components are not very
concerned about data management and are transformed to simple data visualizers.

Then, how are the child components going to inform the parent component that the
data has to change? React solves this issue with callbacks or event handlers,
passed as props to the child components. The code that must run when an event
happens is passed from the parent to the child components. The child components
have no need to know what the code entails, actually it is even better that they
have no idea what the code is about. The children just need to know that it has
to call whatever it has been passed as props.

Therefore, we can summarize the bidirectional data flow in React as follows:
Data flows in a single direction, downward and the child components inform the
parents of the changes via callbacks. When the parents are informed of news, the
data in parent changes and the new data is passed from the top to the
bottom. React recognizes the state and props changes and synchronizes the data
and view.

Now using this technique, let's write our double counter example. The first
thing to observe is that individual counters no longer get their values from
their states, but rather from props, and when the increment button is clicked,
whatever is passed as props is called:

```js
var Counter = React.createClass({

  render: function () {
    return (
    <div>
      You have clicked {this.props.counter} times.
      You need to click {10 - this.props.counter} times more.
      <button onClick={this.props.increment}>Increment</button>
    </div>);
  }
});
```

```js
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
```

This way, the main complexity in the system has been concentrated at the top, in
the parent component, and we were able to reuse the same Counter component for
two different component instances. As a result, we have seen how React's
centralization of data and dissection of interface to components has made
application development simpler and more robust.

## Other Important Topics

In addition to these central topics, we can mention the following important topics in the React ecosystem:

1. During development time, React Devtools is a great help. It allows one to
view the application as a component tree, just like the HTML DOM tree. One can
also view the props and state values of individual components.

2. Using node.js serverside and same React components from our clientside
application, we can build a server-side React application so that we can build
isomorphic applications. Here, instead of React.render, we can use
React.renderToString, which will output the components view as an HTML string,
which we can serve to the user. Using isomorphic techniques, we can get SEO
benefits and faster initial page loads.

3. With recently announced React Native, it will be possible to build native
iPhone and Android applications using React. Here, the empasis is on native,
this project does not aim to build PhoneGap like hybrid web applications, but
native ones.

4. As React applications get more complex, for data management one can use
Facebook's Flux library. We saw that the data should be concentrated as high as
possible, with Flux, the data lives completely outside the components in
structures called Stores and the components subscribe to the changes in the
Stores, and sync their states with these stores.

## Conclusion

In summary, we have seen that React is built on 3 core principles. First of all,
all data changes have to be made explicitly and the data has to flow in a single
direction. Second, each application has be dissected to components and these
components can take props from parents or can manage their own state. If the
components need to communicate with their parents, this is done through
callbacks. Thirdly, for data and view synchronization, the views of components
are re-rendered all the time, and React uses a technique called virtual DOM to
make this fast. With these core principles, we have seen that it is possible to
build ambitious user interfaces rapidly and bug free.
