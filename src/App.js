import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Intro from './components/Intro'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Parent msg= "This msg is for parent " />
       
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
        <Child msg = "Message for Child component"/>
        <Marks />
      </div>
    )
  }
}

/// Make default props
class Marks extends Component{
  render(){
    return(
      <div>
        <h1>Your Marks details: </h1>
        <ul>
          <li>{this.props.name}</li>
          <li>Total Marks : {this.props.totalMarks}</li>
          <li>Courses: {this.props.subjects.map((course,i)=>{
            return <p key={i}> {course} </p>
          })}</li>
          <li>Subject Wise Marks:
            <ul>
              <li>Maths : { this.props.subjectWiseMarks.Maths}</li>
              <li>English: { this.props.subjectWiseMarks.English}</li>
              <li>Marathi: { this.props.subjectWiseMarks.Marathi}</li>
              <li>History:  { this.props.subjectWiseMarks.History}</li>
              <li>Science: { this.props.subjectWiseMarks.Science}</li>
            </ul>
          </li>
          </ul>
      </div>
    )
  }
}

Marks.propTypes  = {
  name : PropTypes.string,
  totalMarks: PropTypes.number,
  subjects: PropTypes.array,
  subjectWiseMarks: PropTypes.object
}

Marks.defaultProps = {
  name : "Sagar V Pednekar",
  totalMarks: 550,
  subjects: ["Maths","English", "Marathi", "History","Science"],
  subjectWiseMarks: {
    "Maths": 138,
    "Marathi": 78,
    "Hindi": 82,
    "English": 51,
    "History": 92,
    "Science": 94
  }

}

class Child extends Component{
  render(){
    return(
      <div>
        <h1>{this.props.msg}</h1>
      </div>
    )
  }
}



export default App;
