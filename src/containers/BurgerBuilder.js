import React, {Component} from 'react';
import Aux from '../hoc/Auxillary/Auxillary';

class BurgerBuilder extends Component {
    render(){
        return (
           <Aux>
               <p>Burger Builder</p>
               <p>Burger controls</p>
           </Aux>
        );
    }
}

export default BurgerBuilder;