import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div >
      <Navigation />
      <Header />
      <Content />
      <Footer />
      </div>
    );
  }
}
// sample parent component


class Parent extends Component {
  render() {
    return (
      <div>
        <h1>Msg: {this.props.msg}</h1>
        <Child msg="Message for Child component" />
        <p> {this.props.names.map((name, i) => {
          return " " + name
        })}</p>
      </div>
    )
  }
}
Parent.defaultProps = {
  names: [
    "Sagar",
    "Shweta",
    "Shraddha"
  ]
}
class Child extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.msg}</h1>
      </div>
    )
  }
}



export default App;
