
let Shop=React.createClass({

displayName:"Shop",
propTypes:{
  shop:React.PropTypes.string.isRequired,
  dataItems:React.PropTypes.arrayOf(
    React.PropTypes.string.isRequired
  ),
  list:React.PropTypes.arrayOf(
   React.PropTypes.shape({
    productName:React.PropTypes.string.isRequired,
    price:React.PropTypes.number.isRequired,
    balance:React.PropTypes.number.isRequired,
    code:React.PropTypes.number.isRequired,
    photo:React.PropTypes.shape.isRequired,

   })


  ),

},

render:function(){
let shop=this.props.shop

  
  return  React.DOM.table( {className:"MyComponent__table"}, 
          React.DOM.caption({className:"MyComponent__table__heading"},shop),
          React.createElement(Product,{dataItems:this.props.dataItems ,list:this.props.list})
    );
    
},

})




















