// Code CoordinatesButton Component Here
import React, {Component} from 'react';


class CoordinatesButton extends Component {
    getXandYonClick = (e) => {
        console.log(e)
        let x = e.clientX;
        let y = e.clientY;
        let coordenates = [x,y]
        console.log(coordenates)
        this.props.onReceiveCoordinates(coordenates)
    }
    render(){
        console.log('props', this.props)
        return(
            <button 
            onClick={this.getXandYonClick}>
                Test
            </button>
        )
    }
}

export default CoordinatesButton;