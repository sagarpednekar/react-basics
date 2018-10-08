import React, { Component } from 'react';
class Intro extends Component {
    constructor(props){
        super(props);
        this.state = {
            name = "Sagar"
        }
    }
    render() {
        const {name} = this.state;
        const intro = "Introduction to react-ui";
        return (
        <div className="App-intro" >
         <h1>Hello there this is {name} </h1>
        </div>
      )
    }
  }
  export default Intro;