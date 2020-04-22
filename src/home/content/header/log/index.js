
import React from 'react';
import Logcomponent from './logComponent/index';


class Log extends React.Component{
    

  
  render(){
 
    return(
      
     
       <div style={{background:'white', height:140, width:'100%', position:'absolute' , margin:0 ,display:'flex', alignItems:'center'}}>
        
         <Logcomponent {...this.props}/>
     
        </div> 
    
    )
  }
}
export default Log; 