var ArrayBlock = React.createClass({

displayName:"ArrayBlock",

propTypes: {
    words: React.PropTypes.array.isRequired,
    workMode:React.PropTypes.number.isRequired
  },
  getInitialState: function(){
    return  { checkBoxState:0,
            inputState: this.props.workMode,
            resetState:this.props.workMode
    }
 },

 checkBoxClick:function(EO){
 console.log(EO.target.checked)
  if(EO.target.checked){
    this.setState({checkBoxState:1})
    
  }
  else{
    this.setState({checkBoxState:0})
  }
 



 },
 
  render: function() {
  
    let startArray=this.props.words
   
      if(this.state.checkBoxState==1){
        startArray.sort()
      }
      if(this.state.checkBoxState==0){
     startArray=['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate']
       
      }
        let option=startArray.map((element,index)=>
        React.DOM.option({key:index},element)
        )
    return  React.DOM.div( {className:'ArrayBlock'}, 
      React.DOM.input({type:'checkbox',defaultChecked:false, onClick:this.checkBoxClick}),
      React.DOM.input({type:'text'}),
      React.DOM.input({type:'reset',value:"Сброс"}),
      React.DOM.form( {className:'form'}, 
      React.DOM.select({size:5},option)
      ),
    );
    }






})