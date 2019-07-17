import React, { Component } from "react";

class Image extends Component{
    render() { 
        return (
            <img src={this.props.counter.imageURL} alt={this.getAltText()}/>
        );
        
    }
    getAltText(){
        return (this.props.counter.name?this.props.counter.name:'test') + this.props.counter.id;
    }
}
export default Image;
