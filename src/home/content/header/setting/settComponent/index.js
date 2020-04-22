import React from 'react';

class Settcomponent extends React.Component{

  state={logsValue:null, shortBreakValue:null ,pomoValue:null}

  
  logHandler=(event)=>{
    this.setState({logsValue:event.target.value})
  }


  shortBreakHandler=(event)=>{
    this.setState({shortBreakValue:event.target.value})
   }

  
  pomoBreakHandler=(event)=>{
    this.setState({pomoValue:event.target.value})
  }


  saveHandler=()=>{
    this.props.changeGoalValue(this.state.logsValue)
    this.props.shortBreakReciever(this.state.shortBreakValue)
    this.props.pomoValueReciever(this.state.pomoValue)
  }
  
    resetHandler=()=>{
      this.props.changeGoalValue(5)
      this.props.shortBreakReciever(10)
      this.props.pomoValueReciever(15)
      }
   
    render(){
     
      
        return(
           <div>
              <div style={{display:'flex',margin:20 ,justifyContent:'flex-start'}}>
                <h2>Pomodoro Goal For Day :</h2>
                <input onChange={this.logHandler} type='number' style={{marginLeft:20,fontSize:30, width:80, height:55 , border:'2px solid skyBlue'}}></input>
              </div>

              <div style={{display:'flex',margin:40 ,justifyContent:'center'}}>
                 <div style={{display:'flex' ,flexDirection:'column', justifyContent:'center' ,margin:30}}>
                   <span style={{marginLeft:0, fontSize:22}}>Pomodoro</span>
                   <input onChange={this.pomoBreakHandler} type='number' style={{fontSize:30, width:100 , border:'2px solid skyBlue'}}></input>
                 </div>
                 <div style={{display:'flex' ,flexDirection:'column', justifyContent:'center', margin:30}}>
                   <span style={{marginLeft:0, fontSize:22}}>ShortBreak</span>
                   <input onChange={this.shortBreakHandler} type='number' style={{fontSize:30, width:100 , border:'2px solid skyBlue'}}></input>
                 </div>
              </div>


              <div style={{display:'flex',margin:40 , justifyContent:'center'}}>
                <button onClick={this.saveHandler } style={{margin:20,fontSize:30, width:100 ,background:'skyBlue'}}>Save</button>
                <button onClick={this.resetHandler} style={{margin:20,fontSize:30, width:100 ,background:'skyBlue'}}>Reset</button>
              </div>

           </div>
        )
    }
}
export default Settcomponent;