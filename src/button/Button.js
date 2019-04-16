import React, {Component} from 'react';

class Button extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <button onClick={()=>this.props.dis()} type="button" disabled = {this.props.isDis}>{this.props.name}</button>
        );
    }
}

export default Button; 