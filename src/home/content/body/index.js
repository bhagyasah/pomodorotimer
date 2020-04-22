import React from 'react';
import Timer from './timer/index';
import Image from './timer/12.JPEG';
class Body extends React.Component{

  
    


    render(){
        return(
           <div  style={{background:`url(${Image})`, height:600, width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
             <Timer {...this.props}/>
           </div>
        )
    }
}
export default Body;