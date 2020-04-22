
import React from 'react';



class Child extends React.Component{
    

  
  render(){
 
    return(
      
     <div style={{background:'black', height:100 , width:'100%', margin:0}}>
     
        
        <div style={{display:'flex', justifyContent:'flex-end', alignItems:'flex-end'}}>
        
         <button onClick={this.props.changeLog} style={{height:45, width:130 , margin:40 , fontSize:30 , position:'relative' ,borderRadius:'80%' ,border:' 3px solid pink'}}>log</button>
         <button onClick={this.props.changeSetting} style={{height:45, width:130, margin:40 , fontSize:30 ,borderRadius:'80%' ,border:' 3px solid pink', position:'relative'}}>setting</button>
        </div>
     </div>
    )
  }
}
export default Child; 