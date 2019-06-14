
import React from 'react';
const Depicts = (Component,className) =>{
    return (props) =>(
        <div ClassName={className}>
            <Component />
        </div>
    )
}

export default Depicts;



// import React, { Component} from 'react';

// const Aux = (WrappedComponent) =>{
//     //class factory
//     //anonymous class
//     return  class extends Component{
//         render(){
//             return(
//                 <div>
//                     <WrappedComponent />
//                 </div>
//             );
//         }
//     }
// }

// export default Aux;