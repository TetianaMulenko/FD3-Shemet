var ArrayBlock = React.createClass({

displayName:"ArrayBlock",

propTypes: {
    words: React.PropTypes.array.isRequired,
  
  },
  getInitialState: function(){
    return  { 
   startArray:this.props.words,
   value:null
    }
 },

 checkBoxClick:function(EO){
  if(EO.target.checked){
    this.setState( {startArray:this.state.startArray.concat().sort()} );
    console.log(this.props.words)
  }
  else{
    this.setState( {startArray:this.props.words} )
    console.log(this.props.words)
  }
 
 },
 inputChange:function(EO){
this.setState({value:EO.target.value})
 const filterWords=this.props.words.filter(arrayWord=> arrayWord.includes(this.state.value))
 console.log(this.state.value)
 console.log(filterWords)
this.setState({startArray:filterWords})
  
 },
 
  render: function() {
   
  
    let startArray=this.state.startArray
   
     
        let option=startArray.map((element,index)=>
        React.DOM.option({key:index},element)
        )
    return  React.DOM.div( {className:'ArrayBlock'}, 
      React.DOM.input({type:'checkbox',defaultChecked:false, onClick:this.checkBoxClick}),
      React.DOM.input({type:'text',onChange:this.inputChange}),
      React.DOM.input({type:'reset',value:"Сброс"}),
      React.DOM.form( {className:'form'}, 
      React.DOM.select({size:5},option)
      ),
    );
    
  }






})