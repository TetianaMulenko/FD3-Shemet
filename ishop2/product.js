let Product = React.createClass({
  displayName: "Product",

  render: function () {
    const product = this.props.product;
    return React.DOM.tr({}, [
      React.DOM.td({}, product.productName),
      React.DOM.td({}, product.price),
      React.DOM.td({}, product.url),
      React.DOM.td({}, product.balance),
      React.DOM.td({}, product.code),
    ]);
  },
});
