// Code DelayedButton Component Here
import React, {Component} from 'react';



class DelayedButton extends Component {
    
    handleClick = (e) => {
        e.persist()
        setTimeout(() => {return this.props.onDelayedClick(e)}, this.props.delay)
    }

    render(){
        return(
            <button 
            onClick={this.handleClick}>test button</button>
        )
    }
}

export default DelayedButton;