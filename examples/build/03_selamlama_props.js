var MerhabaDunya = React.createClass({displayName: "MerhabaDunya",
  render: function () {
    return React.createElement("div", null, "Merhaba ", this.props.isim)
  }
});

var Selamlama = React.createClass({displayName: "Selamlama",
    render: function () {
      return React.createElement("div", null, 
            React.createElement(MerhabaDunya, {isim: "Ustun"}), 
            React.createElement(MerhabaDunya, {isim: "Ozgur"})
       )
     }
})

React.render(React.createElement(Selamlama, null), document.body)
