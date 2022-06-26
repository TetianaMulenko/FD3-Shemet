
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
var productList=this.props.list
var dataArray=[]
var productsArray=[]

productList.forEach(element => {
  var nextProduct=  React.DOM.td({className:null},element.productName)
    React.DOM.td({className:null}, element.price)
    React.DOM.td({className:null},element.url)
    React.DOM.td({className:null},element.balance)
      React.DOM.td({className:null},  React.DOM.input({type:"reset",value:"Delete"}))
 
 
  productsArray.push(nextProduct)
 
}
);



let data=this.props.dataItems
data.forEach((element,index) => {
  let td=React.DOM.td({key:index},element)
  dataArray.push(td)
}


);

console.log(productList[0])

  
  return  React.DOM.table( {className:"MyComponent__table"}, 
          React.DOM.caption({className:"MyComponent__table__heading"},shop),
          React.DOM.tbody( {className:null},
            React.createElement(Product,{product:productsArray[0]}),
            React.createElement(Product,{product:productsArray[1]}),
            React.createElement(Product,{product:productsArray[2]}),
          )
    );
    
},

})




















