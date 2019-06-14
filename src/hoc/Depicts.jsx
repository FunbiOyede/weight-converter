
import React from 'react';
const Depicts = (Component,className) =>{
    return (props) =>(
        <div ClassName={className}>
            <Component />
        </div>
    )
}

export default Depicts;