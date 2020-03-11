import React from 'react';
import '../App.css';


class Config extends React.Component {
    sendClick = (e) => {
        this.props.configSession(e.target.id)
    }
    render() {
        return (
            <div className="Config">
                <div id="break-label">
                    Session Duration
                    <p><span
                        id="session-increment"
                        onClick={this.sendClick}>+</span>
                        <span id="session-length">{this.props.sessionTime}</span>
                        <span
                            id="session-decrement"
                            onClick={this.sendClick}>-</span></p>
                </div>
                <div id="session-label">
                    Break Duration
                    <p><span
                        id="break-increment"
                        onClick={this.sendClick}>+</span>
                        <span id="break-length">{this.props.breakTime}</span>
                        <span
                            id="break-decrement"
                            onClick={this.sendClick}>-</span>
                    </p>
                </div>

            </div>
        );
    }

}

export default Config;