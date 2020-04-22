import React from 'react';

class TimerComponent extends React.Component{

    render(){
        return(
           <div>
             <button onClick={this.props.changePomodoroValue} style={{height:40, width:120 , margin:20 ,fontSize:20 ,borderRadius:'80%'}}>Pomodoro</button>
             <button onClick={this.props.changeShortValue} style={{height:40, width:120 , margin:20 ,fontSize:20 ,borderRadius:'80%'}}>Shortbreak</button>
           </div>
        )
    }
}
export default TimerComponent;