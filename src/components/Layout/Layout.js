import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import classes from './Layout.module.css';


const layout = (props)=>{
    return(
        <Aux>
        <div>Sidebar toolbar navigation</div>
        <main className= {classes.content}>
            {props.children}
        </main>
        </Aux>
    );
}

export default layout;