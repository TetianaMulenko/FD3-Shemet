var ArrayBlock = React.createClass({

displayName:"ArrayBlock",

propTypes: {
    words: React.PropTypes.array.isRequired,
  
  },
  getInitialState: function(){
    return  { 
   startArray:this.props.words,
   filterString:"",
   sort:false,
   updateArray:function(){
    let lines=this.props.words.slice();
    if ( this.state.filterString ){
      lines=lines.filter( line => line.indexOf(this.state.filterString)!=-1 )
      this.setState( {startArray:lines} )
    }
   
      if ( this.state.sort ){
      lines.sort();
      this.setState( {startArray:lines} )
      }

    }
   }
    
 },

 checkBoxClick:function(EO){
  if(EO.target.checked){
    console.log(this.props.words)
    this.setState( {sort:true}, this.state.updateArray );
  }
  else{
    this.setState( {sort:false}, this.state.updateArray );
  
  }
  
 },
 inputChange:function(EO){
  
  if(EO.target.value)
  this.setState( {filterString:EO.target.value}, this.state.updateArray );
  if(!EO.target.value)
  this.setState({filterString:""})
 },
 
 resetClick:function(EO){
  this.setState( {sort:false}, this.state.updateArray );
  this.setState({filterString:""},this.state.updateArray)
  // Если напишу this.state.updateArray(), то выбьет ошибку
  this.state.updateArray()
  console.log("Сброс")
  
 },
 






 
  render: function() {
   
  
    let startArray=this.state.startArray
   
     
        let option=startArray.map((element,index)=>
        React.DOM.option({key:index},element)
        )
    return  React.DOM.div( {className:'ArrayBlock'}, 
      React.DOM.input({type:'checkbox',defaultChecked:false, onClick:this.checkBoxClick}),
      React.DOM.input({type:'text',onChange:this.inputChange}),
      React.DOM.input({type:'reset',value:"Сброс",onClick:this.resetClick}),
      React.DOM.form( {className:'form'}, 
      React.DOM.select({size:5},option)
      ),
    );
    
  }






})