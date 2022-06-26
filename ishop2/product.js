
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
      console.log(this.props.product.code)
      return     React.DOM.tr({},
      
        React.DOM.td({},this.props.product.productName),
        React.DOM.td({},this.props.product.price),
        React.DOM.td({},this.props.product.url),
        React.DOM.td({},this.props.product.balance),
        
        ) 
    },
    
    })
    
    
    
    
    
    
    
    
    
    
    
    
    