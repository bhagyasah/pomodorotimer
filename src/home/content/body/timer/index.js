import React from 'react';
import TimerComponent from './timerComponent/index';
class Timer extends React.Component{
    state={timerValue:60}

    changePomodoroValue=()=>{
        this.setState({timerValue:this.props.pomoValue * 60})
    }
    
    changeShortValue=()=>{
        this.setState({timerValue:this.props.shortBreakValue * 60})
    }
    
   startTimer=()=>{
     const reset= setInterval(() => {
           this.setState({timerValue:this.state.timerValue-1});
           if(this.state.timerValue === 0){
               this.setState({timerValue:60});
               this.props.Pomotimer();
           }
       }, 1000);
       this.setState({resetValue:reset})
   }

  

    render(){
        return(
          <div>
            <TimerComponent {...this.props} changePomodoroValue={this.changePomodoroValue} changeShortValue={this.changeShortValue}/>
            <div style={{ width:'100%', height:100, display:'flex', justifyContent:'center', alignItems:'center'}}>
              <span style={{fontSize:140}}>{`${Math.floor(this.state.timerValue / 60)} : ${Math.floor(this.state.timerValue % 60)}`}</span>
            </div>
            <button onClick={this.startTimer} style={{height:40, width:120 , margin:20 ,fontSize:20 ,borderRadius:'80%'}}>Start</button>
            <button onClick={this.resetTimer} style={{height:40, width:120 , margin:20 ,fontSize:20 ,borderRadius:'80%'}}>Reset</button>
           </div>
        )
    }
}
export default Timer;