import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };

    setTimeout(() => {
      // Select a random instructor
      const randInst = Math.floor(
        Math.random() * this.state.instructors.length 
      );
      
      // Select the index of the hobby to delete
      const hobbyIndex = Math.floor(
        Math.random() * this.state.instructors[randInst].length  
      );
      
      // // Make a copy of the instructors array so the original is not modified
      const instructors = this.state.instructors.map((inst, i) => {
        // If the index is on the instructor we want to modify
        if (i === randInst) {
          // Make a copy of the hobbies array
          const hobbies = [...inst.hobbies];
          // Remove the hobby
          hobbies.splice(hobbyIndex, 1);
          // Return a new object and the hobbies array that was copied and modified
          return {
            ...inst,
            hobbies
          }
        }
        
        return inst;
      });

      this.setState({instructors});
    }, 5000)
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
