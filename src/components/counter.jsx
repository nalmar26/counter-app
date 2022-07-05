import React, { Component } from "react";
import Image from './image';

class Counter extends Component {
    
    style = {
        fontSize: 50,
        fontWeight: "bold"
    };
    
    render() { 
        //console.log(this.props);
        //this.setState({count:this.props.value});
        return (
            <div>
                {this.props.children}
                {/* <img src={this.state.imageUrl} alt='200 * 200 Image'/> */}
                <span
                    style={{
                        fontSize: 20
                    }}
                    className={this.getBadgeClasses()}
                >
                    {this.formatCount()}
                </span>
                <button onClick={() => this.props.onChange(this.props.counter,true)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onChange(this.props.counter,false)} className="btn btn-danger btn-sm m-2">Decrement</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                <Image counter={this.props.counter} />
                {/* <ul>
                    
                    {this.renderTags()}
                </ul> */}
            </div>
        );
    }
    // handleIncrement(){
    //     console.log('increment Clicked');
    //     //this.state.count ++; donnot work
    //     this.setState({
    //         count:this.state.count+1
    //     });
    // }
    // handleDecrement = () =>{
    //     console.log('Decrement Clicked');
    //     if(this.state.count >0){
    //         this.setState({
    //             count:this.state.count-1
    //         });
    //     }
    //     //this.state.count ++; donnot work
    // }
    // renderTags(){
    //     //if(this.state.tags.length ===0 ) return <p>There are no tags</p>;
    //     return (this.state.tags.map(tag => <li key={tag}>{tag}</li>));
    // }
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        const x = "zero";
        return value === 0 ? x : value;
    }
}

export default Counter;
