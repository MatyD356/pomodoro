import React from 'react';
import '../App.css';

class Clock extends React.Component {
    render() {
        return (
            <div className="Clock">
                <div id="timer-label">
                    {this.props.onGoing}
                    <div id="time-left">
                        {this.props.min < 10 ? `0${this.props.min}` : this.props.min}:
                        {this.props.sec < 10 ? `0${this.props.sec}` : this.props.sec}</div>
                    <div>
                        <span id="start_stop" onClick={this.props.startStop}>Stop/Start</span>
                        <span id="reset" onClick={this.props.reset}> Reset</span>
                    </div>
                </div>
            </div>
        );
    }

}

export default Clock;