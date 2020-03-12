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
      onGoing: "Session",
      active: false,
      sessionTime: 25,
      breakTime: 5,
      minutes: 25,
      seconds: 0
    }, () => { this.stopAudio() })
  }
  //handlig time config
  configTime = (childdata) => {
    if (this.state.sessionTime < 60 && childdata === "session-increment") {
      this.setState({
        sessionTime: this.state.sessionTime + 1
      }, () => (this.updateTime()))
    }
    else if (this.state.sessionTime > 1 && childdata === "session-decrement") {
      this.setState({
        sessionTime: this.state.sessionTime - 1
      }, () => (this.updateTime()))
    }
    else if (this.state.breakTime < 60 && childdata === "break-increment") {
      this.setState({
        breakTime: this.state.breakTime + 1
      }, () => (this.updateBreakTime()))
    }
    else if (this.state.breakTime > 1 && childdata === "break-decrement") {
      this.setState({
        breakTime: this.state.breakTime - 1
      }, () => (this.updateBreakTime()))
    }
  }
  //updating session time
  updateTime = () => {
    if (this.state.onGoing === "Break") { }
    else {
      if (this.state.active === false) {
        this.setState({
          minutes: this.state.sessionTime
        })
      }
    }
  }
  //updating break time
  updateBreakTime = () => {
    if (this.state.onGoing === "Session") { }
    else {
      if (this.state.active === false) {
        this.setState({
          minutes: this.state.breakTime
        })
      }
    }
  }
  //main funckion loopin session and breaks
  startStop = () => {
    //session timing
    let sesionInter = () => {
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
        //starting break after session ends
        if (this.state.minutes === -1 && this.state.seconds === 59) {
          clearInterval(this.intervalID)
          this.playAudio()
          this.intervalID = setInterval(breakInter, 1000)
          this.setState({
            onGoing: "Break",
            seconds: 0,
            minutes: this.state.breakTime
          }, () => { this.playAudio() })
        }
      })
    }
    //break timing
    let breakInter = () => {
      if (this.state.seconds === 0) {
        //minute tick
        this.setState({
          minutes: this.state.minutes - 1,
          seconds: 60
        })
      }
      //second tick
      this.setState({
        seconds: this.state.seconds - 1
      }, () => {
        //ending break 
        if (this.state.minutes === -1 && this.state.seconds === 59) {
          console.log('end of break')
          clearInterval(this.intervalID)
          this.intervalID = setInterval(sesionInter, 1000)
          this.setState({
            onGoing: "Session",
            minutes: this.state.sessionTime,
            seconds: 0
          })
        }
      })

    }
    //ticking ON OFF
    if (this.state.active === false) {
      this.intervalID = setInterval(sesionInter, 1000)
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
  // play auido
  playAudio = () => {
    let audio = document.getElementById('beep');
    audio.play();
  }
  // stop auido
  stopAudio = () => {
    let audio = document.getElementById('beep');
    if (audio.duration > 0 && !audio.paused) {
      audio.pause();
      audio.currentTime = 0;
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
        <audio id="beep" preload="auto"
          src="https://goo.gl/65cBl1" />
      </div>
    );
  }
}

export default App;
