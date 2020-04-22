
import React from 'react';
import Header from './header/index';
import Body from './body';
import Footer from './footer/index';
import Log from './header/log/index';
import Setting from './header/setting/index';


class Honda extends React.Component{
   
  state={logTracker:false ,incrPomoTimer:0 , settingTracker:false ,goalValue:0, pomoValue:0, shortBreakValue:0}

  changeLog=()=>{
  
    this.setState({logTracker:! this.state.logTracker })
  }
  
  

  Pomotimer=()=>{
    this.setState({incrPomoTimer:this.state.incrPomoTimer + 1})
  }

changeSetting=()=>{
  this.setState({settingTracker:!this.state.settingTracker})
}

changeGoalValue=(logsValue)=>{
this.setState({goalValue:logsValue})
}

shortBreakReciever=(shortBreakvalue)=>{
this.setState({shortBreakValue:shortBreakvalue})
}



pomoValueReciever=(pomoValue)=>{
  this.setState({pomoValue:pomoValue})
  }
  
  render(){
    console.log(this.state.goalValue)
 console.log(this.state.pomoValue);
    return(
      
     <div style={{margin:0}}>
      
        <Header incrPomoTimer={this.state.incrPomoTimer} changeLog={this.changeLog} changeSetting={this.changeSetting}/>
        { this.state.logTracker ? <Log goalValue={this.state.goalValue} incrPomoTimer={this.state.incrPomoTimer} /> : null }
        <div style={{display:'flex' , justifyContent:'flex-end' }} >
          {this.state.settingTracker ? <Setting shortBreakReciever={this.shortBreakReciever} pomoValueReciever={this.pomoValueReciever} changeGoalValue={this.changeGoalValue} /> : null}
        </div>
        <Body shortBreakValue={this.state.shortBreakValue} pomoValue={this.state.pomoValue} Pomotimer={this.Pomotimer} incrPomoTimer={this.state.incrPomoTimer}/>
       
       
      
       <Footer/>
     </div>
    )
  }
}
export default Honda; 