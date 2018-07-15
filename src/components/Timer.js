import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
    constructor(props){
      super(props);
      this.state={
        clock:0
      }
      this.timeSpend = this.timeSpend.bind(this);
    }
    componentDidMount(){
      setInterval(this.timeSpend,1000);
    }
    timeSpend(){
      this.setState({
        clock: (new Date() - this.props.time)
      });
    }
    render() {
      return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Timer App </h1>
          <p>You have been there from <span>{(Math.floor(this.state.clock/1000))}</span> Seconds</p>   
        </div>
      )
    }
  }
  export default Header;