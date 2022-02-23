import React from 'react';
// this is a stateless functional component 
// Will need render() and return when event handler added to switch
// Also will need a state since the switch need an intial state of on??? Not sure about this??

const Switch =() => (
    <div className="switch-plate">
        <div className="screw" />
        <div className="switch">
        <div className="switch-handle" />
        </div>
        <div className="screw" />
    </div>    
)

export default Switch;