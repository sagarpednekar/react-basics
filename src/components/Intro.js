import React, { Component } from 'react';
class Intro extends Component {
    constructor(props){
        super(props);
        this.name = "Sagar";
        // default values
        this.state = {

        }
    }
    hello(name){
        return "Hey "+ name;
    }
    render() {
        const intro = "Introduction to react-ui";
        return (
        <div className="App-intro" >
         <h1>Hello there this is {this.name} </h1>
        </div>
      )
    }
  }
  export default Intro;