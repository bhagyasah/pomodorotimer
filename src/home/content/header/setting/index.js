import React from 'react';
import Settcomponent from './settComponent/index';

class Setting extends React.Component{

    render(){
        return(
            <div style={{background:'white', width:'60%' ,height:600, position:'absolute',margin:0}}>
              <Settcomponent {...this.props}/>
            </div>
        )
    }
}
export default Setting;