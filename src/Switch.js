import React from 'react';
import { transpileModule } from 'typescript';

class Switch extends React.Component {
//    state = {on: true};
    render() {
        // const wallClass (this.state) => {
        //     if (this.on === true){
        //         wallClass="on"
        //     }
        //     wallClass="off";
        // }
        return (
            <div className={wallClass}>
                <div className="switch-plate">
                    <div className="screw" />
                    <div className="switch">
                        <div className="switch-handle" />
                    </div>
                    <div className="screw" />
                </div>
            </div>
        )
    }   
} 

export default Switch;