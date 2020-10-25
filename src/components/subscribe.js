import React, {Component } from 'react';

class Subscribe extends Component{
      
    constructor(){
        super();
        this.state={
            message : "Subscribe to our channel"
        }
    }
    changeMessage(){
        this.setState({
            message: "thank you fro choosing me "
        })
    }
    render (){
        return(  <div>
          <h1>{this.state.message}</h1>
          <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
            )
      }
}

export default Subscribe;