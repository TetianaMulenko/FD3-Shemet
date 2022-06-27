let TableHead = React.createClass({
  render: function () {
    const columnNames = this.props.columnNames;
    return React.DOM.tr(
      {},
      columnNames.map((columnName) => React.DOM.th({}, columnName))
    );
  },
});
