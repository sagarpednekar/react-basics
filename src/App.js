import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Marks  />
      </div>
    );
  }
}

/// Make default props
class Marks extends Component {
 //define default states here in constructor
  constructor(props) {
    super(props);
    this.state = {
      name: "Sagar V Pednekar",
      totalMarks: 550,
      subjects: ["s-Maths", "s-English", "s-Marathi", "s-History", "s-Science"],
      subjectWiseMarks: {
        "Maths": 138,
        "Marathi": 78,
        "Hindi": 82,
        "English": 51,
        "History": 92,
        "Science": 94
      }
    }
  this.handleReverse = this.handleReverse.bind(this);
  this.handleSort = this.handleSort.bind(this);
  }

  handleReverse(){
    this.setState( {subjects: this.state.subjects.reverse()} );
  }
  handleSort(){
    this.setState({
      subjects: this.state.subjects.sort()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSort}>Sort</button>
        <button onClick={this.handleReverse}>Reverse</button>
        <h1 >Your Marks details: </h1>
        <ul>
        <Subject subjects={this.state.subjects} />
          <li>{this.state.name}</li>
          <li>Total Marks : {this.state.totalMarks}</li>  
          <li>Subject Wise Marks:
            <ul>
              <li>Maths : {this.state.subjectWiseMarks.Maths}</li>
              <li>English: {this.state.subjectWiseMarks.English}</li>
              <li>Marathi: {this.state.subjectWiseMarks.Marathi}</li>
              <li>History:  {this.state.subjectWiseMarks.History}</li>
              <li>Science: {this.state.subjectWiseMarks.Science}</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

class Subject extends Component {
  render() {
    return (
      <div>
         <li >Courses: {this.props.subjects.map((subject,i)=>{
           return <p>{subject}</p>
         })}</li>
      </div>
    )
  }
}


export default App;
