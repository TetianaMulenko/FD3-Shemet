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
  
   }
    
 },

 checkBoxClick:function(EO){
  if(EO.target.checked){
    console.log(this.props.words)
    this.setState( {sort:true}, this.updateArray );
    
  }
  else{
    this.setState( {sort:false}, this.updateArray );
  }
  
 },
 inputChange:function(EO){
  
  this.setState( {filterString:EO.target.value}, this.updateArray );
  this.updateArray()

  
 
 },
 
 resetClick:function(EO){
  this.setState( {sort:false}, this.updateArray );
  this.setState({filterString:""},this.updateArray)
  this.updateArray()
  let check= document.querySelector('input[type=checkbox]')
  check.checked=false;
  let input=document.querySelector('input[type=text]')
  input.value=""

 
  
 },
 updateArray:function(){
 console.log(this.state.sort)
 console.log(this.state.filterString)
  let lines=this.props.words.slice();
  if ( this.state.filterString ){
    lines=lines.filter( line => line.indexOf(this.state.filterString)!=-1 )
    this.setState( {startArray:lines} )
  }
 
    if ( this.state.sort ){
    lines.sort();
  }
    this.setState( {startArray:lines} )
   
   
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