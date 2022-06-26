
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
      
      
    
      
      return     React.DOM.tr({},this.props.product)
      
      
      
      
       
        
    },
    
    })
    
    
    
    
    
    
    
    
    
    
    
    
    