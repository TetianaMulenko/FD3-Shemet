let Shop = React.createClass({
  render: function () {
    console.log(this.props);
    const {
      list,
      productRenderer,
      shop,
      tableHeadRenderer,
      dataItems,
    } = this.props;

    return React.DOM.table(
      { className: "MyComponent__table" },
      React.DOM.caption({ className: "MyComponent__table__heading" }, shop),
      React.DOM.thead({},
        React.createElement(tableHeadRenderer, { columnNames: dataItems })
      ),
      React.DOM.tbody(
        { className: null },

        list.map((product) =>
          React.createElement(productRenderer, {
            product: product,
          })
        )
      )
    );
  },
});
