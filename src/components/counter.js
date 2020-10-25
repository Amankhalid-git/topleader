import React, {Component } from 'react';

class Counter extends Component{
   
    constructor(){
        super();
        this.state={
            count : 1,
            message: ""
        }
    }
    incrementCount(){
        this.setState({
            count: this.state.count + 1
        }, () =>{
        if(this.state.count==10){
            this.setState({
                message: "you got agreement"
            })
        }
    } )
    }
    render (){
        return(  <div>
          <h1>{this.state.count}</h1>
          <p>{this.state.message}</p>
          <button onClick={()=>this.incrementCount()}>increment</button>
            </div>
            )
      }
}

export default Counter;