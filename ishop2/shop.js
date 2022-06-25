
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


var dataArray=[]

let data=this.props.dataItems
data.forEach((element,index) => {
  let td=React.DOM.td({key:index},element)
  dataArray.push(td)
});


  
  return  React.DOM.table( {className:"MyComponent__table"}, 
          React.DOM.caption({className:"MyComponent__table__heading"},shop),
          React.DOM.tbody( {className:null},
            React.DOM.tr({className:null},dataArray),
          React.createElement(Product,{list:this.props.list}))
    );
    
},

})




















