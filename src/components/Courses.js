import React, { Component } from 'react';
import logo from '../logo.svg';

class Courses extends Component {
    constructor(props){
      super(props);
      this.state={
      
      }
    }
    render() {
      const courses = this.props.course;
      return (
        <div className="App-Courses">
           <h1>Hi , From course listing page</h1>
           <p>Available courses are : 
              </p>
        </div>
      )
    }
  }
  export default Courses;