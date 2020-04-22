import React from 'react';



class Logcomponent extends React.Component{
    
  state={justValue:null, goalValue:0}

  componentWillMount(){
    this.setState({justValue:this.props.incrPomoTimer})
  }
   
  componentWillReceiveProps(newprops){
    this.setState({justValue:newprops.incrPomoTimer})
    this.setState({goalValue:newprops.goalValue})
   }
  generateTracker=()=>{

    const arr=[];
    for(let i=0; i<this.state.goalValue; i+=1){
      if(i<this.state.justValue){
           arr.push(<div style={{background:'green',width:50 ,height:50, borderRadius:'50%', margin:10}}></div>)
          } else{
            arr.push(<div style={{background:'white', height:50 , width:50 , borderRadius:'50%', border:'2px solid green', margin:10}}></div>)
          }

    }
    return arr;
  }
  
  render(){
 
    return(
      
     
       <div style={{display:'flex'}}>
        <span style={{fontSize:60}}>Pomodoro Goal Start Here :</span>
        {this.generateTracker()}
     
        </div> 
    
    )
  }
}
export default Logcomponent; 