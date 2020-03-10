import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sesionsCount: 0,
      sessionTime: 25,
      breakTime: 5
    }
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="App" />
    );
  }
}

export default App;
