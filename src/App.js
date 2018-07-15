import React, { Component } from 'react';
import './App.css';
import Courses from './components/Courses';

class App extends Component {
  render() {
    const courses = [
      { 
        name: "Udemy -react",price: "100$"
      },
      { 
        name: "Udemy -angular",price: "80$"
      },
      { 
        name: "Udemy -SQL",price: "10$"
      }
    ]
    return (
      <div className="App">
       <Courses course = {courses} />
      </div>
    );
  }
}
// sample parent component

export default App;
