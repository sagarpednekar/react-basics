import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cycle  />
      </div>
    );
  }
}

/// Make default props
class Cycle extends Component {
 //define default states here in constructor
 constructor(props) {
    super(props);
    this.state = {
      myNumber: 0
    }
    this.handleRandom = this.handleRandom.bind(this)
  }
  handleRandom(){
    this.setState({
      myNumber: Math.floor(Math.random()*100)
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRandom}>Random Number</button>
        <h1 >Component Lifescycle </h1>
          <Numbers myNumber= {this.state.myNumber}/>
      </div>
    )
  }
}

class Numbers extends Component {

  componentDidMount(){
    console.log("This is did mount & called afer component is mounted")
  }
  componentWillMount(){
    console.log("Wil mount -Component is About to mount")

  }
  componentWillReceiveProps(nextProps)  {
    console.log("Called when on click of random buttoon and Number component receives props ") 
  }
 
  componentDidUpdate(prevProps, prevState) {
    console.log(" CN did Update ?")
  }
  componentWillUpdate(nextProps, nextState){
    console.log("CN will Update ?")
  }
 
  shouldComponentUpdate (nextProps, nextState) {
    console.log("Should CN Update ?")    
  }
  
  


  render() {
    return (
      <div>
        {this.props.myNumber}
      </div>
    )
  }
}


export default App;
