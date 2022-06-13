
let MyComponent=React.createClass({

displayName:"MyComponent",
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
    key:React.PropTypes.number.isRequired,
    photo:React.PropTypes.shape.isRequired,

   })


  ),


   

},

render:function(){
  
 
  var productsArray=[]
  var dataArray=[]
  
  let data=this.props.dataItems
  data.forEach(element => {
    let td=React.DOM.td({key:Math.random()},element)
    dataArray.push(td)
  });
  
   
  var shop=this.props.shop
  var productList=this.props.list
  productList.forEach(element => {
    var nextProduct=        
    React.DOM.tr({key: Math.random(),className:null},
      React.DOM.td({key: 14,className:null},element.productName),
      React.DOM.td({key: 15,className:null}, element.price),
      React.DOM.td({key: 16,className:null},element.photo),
      React.DOM.td({key: 17,className:null},element.balance),
    )
    productsArray.push(nextProduct)
  });
  
  return React.DOM.table( {className:"MyComponent__table",}, 
  React.DOM.caption({className:"MyComponent__table__heading"},shop),
     React.DOM.tbody( {className:null},
     React.DOM.tr({className:null},dataArray),
     
     productsArray),
    );
},

})




















