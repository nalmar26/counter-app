import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters:[
            {id:1, value : 4, imageURL:'https://picsum.photos/90', name:'test'},
            {id:2, value : 0, imageURL:'https://picsum.photos/90', name:'test'},
            {id:3, value : 0, imageURL:'https://picsum.photos/90', name:'test'},
            {id:4, value : 0, imageURL:'https://picsum.photos/90', name:'test'}
        ],
        ids:4
     }
    render() {
        return ( <div>
            <button className="btn-primary btn-sm m-2" onClick={this.handleReset}>reset</button>
            <button className="btn-primary btn-sm m-2" onClick={this.handleAdd}>Add</button>
            <span className="badge badge-pill badge-secondary">{this.getSum()}</span>
            {
                this.state.counters.map(c => (
                <Counter key={c.id} counter={c} 
                onChange={this.handleChange}
                onDelete={this.handleDelete}>
                <h4>Counter #{c.id}</h4>
                </Counter>
            ))}
        </div>  );
    }
    getSum(){
        let sum = 0;
        this.state.counters.forEach(function(c,index){
            sum +=c.value;
        })
        return sum;
    }
    handleChange = (counter,increment)=>{
        const counters = [...this.state.counters];
        const index = this.state.counters.indexOf(counter);
        counters[index] = {...counter};
        if(increment){
            counters[index].value ++;
        } else if(counters[index].value >0){
            counters[index].value --;
        } else {
            return;
        }
        this.setState({counters});
    }

    handleDelete = (counterid)=>{
        const counters = this.state.counters.filter(c=>c.id!=counterid);
        this.setState({counters});
    }
    handleAdd = () =>{
        const c = {
            id:this.state.ids+1,
            value : 0
        };
        const counters = this.state.counters;
        counters.push(c);
        this.setState(counters);
    }
    handleReset = ()=>{
        const counters = [...this.state.counters];
        counters.map(c => c.value = 0);
        this.setState(counters);
        this.setState({ids:0});
    }
}
 
export default Counters;