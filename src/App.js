import React from 'react';
import Clock from './components/Clock';
import Config from './components/Config';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      onGoing: "Session",
      sessionTime: 25,
      breakTime: 5,
      minutes: 25,
      seconds: 0
    }
  }
  intervalID = 0;
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    document.body.appendChild(script);
  }
  //reset to default
  reset = () => {
    clearInterval(this.intervalID)
    this.setState({
      active: false,
      sessionTime: 25,
      breakTime: 5,
      minutes: 25,
      seconds: 0
    })
  }
  //handlig time config
  configTime = (childdata) => {
    if (this.state.sessionTime < 60 && childdata === "session-increment") {
      this.setState({
        sessionTime: this.state.sessionTime + 1
      }, () => (this.updateTime()))
    } else if (this.state.sessionTime > 1 && childdata === "session-decrement") {
      this.setState({
        sessionTime: this.state.sessionTime - 1
      }, () => (this.updateTime()))
    } else if (this.state.breakTime < 60 && childdata === "break-increment") {
      this.setState({
        breakTime: this.state.breakTime + 1
      }, () => (this.updateTime()))
    } else if (this.state.breakTime > 1 && childdata === "break-decrement") {
      this.setState({
        breakTime: this.state.breakTime - 1
      }, () => (this.updateTime()))
    }
    (() => (this.updateTime()))();
  }
  updateTime = () => {
    if (this.state.active === false) {
      this.setState({
        minutes: this.state.sessionTime
      })
    }
  }
  startStop = () => {
    let inter = () => {
      //min tick 
      if (this.state.seconds === 0) {
        this.setState({
          minutes: this.state.minutes - 1,
          seconds: 60
        })
      }
      //second tick
      this.setState({
        seconds: this.state.seconds - 1
      }, () => {
        //stoping ticking on 0
        if (this.state.minutes === 0 && this.state.seconds === 0) {
          clearInterval(this.intervalID)
        }
      })
    }
    //ticking ON OFF
    if (this.state.active === false) {
      this.intervalID = setInterval(inter, 1000)
      this.setState({
        active: !this.state.active
      }, () => { console.log("ON") });
    }
    else if (this.state.active === true) {
      clearInterval(this.intervalID)
      this.setState({
        active: !this.state.active
      }, () => { console.log("OFF") });
    }
  }
  render() {
    return (
      <div className="App">
        <Config
          configSession={this.configTime}
          sessionTime={this.state.sessionTime}
          breakTime={this.state.breakTime} />
        <Clock
          onGoing={this.state.onGoing}
          reset={this.reset}
          startStop={this.startStop}
          min={this.state.minutes}
          sec={this.state.seconds} />
      </div>
    );
  }
}

export default App;
