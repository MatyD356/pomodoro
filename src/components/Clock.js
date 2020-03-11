import React from 'react';
import '../App.scss';

class Clock extends React.Component {
    render() {
        return (
            <div className="Clock">
                <div id="timer-label" className="clock-container">
                    <h2 className="clockTitle">{this.props.onGoing}</h2>
                    <div id="time-left" className="time-left">
                        {this.props.min < 10 ? `0${this.props.min}` : this.props.min}:
                        {this.props.sec < 10 ? `0${this.props.sec}` : this.props.sec}</div>
                    <div className="control-buttons">
                        <button id="start_stop" onClick={this.props.startStop}>Start/Stop</button><br />
                        <button id="reset" onClick={this.props.reset}> Reset</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Clock;