
let Product=React.createClass({

    displayName:"Product",
    propTypes:{
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
      
      var productsArray=[]
     
      
       
     
      var productList=this.props.list
      productList.forEach(element => {
        var nextProduct=        
        React.DOM.tr({key: element.code,className:null},
          React.DOM.td({className:null},element.productName),
          React.DOM.td({className:null}, element.price),
          React.DOM.td({className:null},element.url),
          React.DOM.td({className:null},element.balance),
            React.DOM.td({className:null},  React.DOM.input({type:"reset",value:"Delete"})),
        )
        productsArray.push(nextProduct)
       
      });
    
      
      return      productsArray
      
      
      
       
        
    },
    
    })
    
    
    
    
    
    
    
    
    
    
    
    
    