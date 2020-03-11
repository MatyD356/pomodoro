import React from 'react';
import '../App.scss';

class Config extends React.Component {
    sendClick = (e) => {
        this.props.configSession(e.target.id)
    }
    render() {
        return (
            <div className="Config">
                <div id="break-label">
                    <h2 className="session-title">Session</h2>
                    <div className="config-container">
                        <p
                            className="plus"
                            id="session-increment"
                            onClick={this.sendClick} >
                            +
                        </p>
                        <p id="session-length">{this.props.sessionTime}</p>
                        <p
                            className="minus"
                            id="session-decrement"
                            onClick={this.sendClick} >
                            -
                        </p>
                    </div>
                </div>
                <div id="session-label">
                    <h2 className="break-title">Break</h2>
                    <div className="config-container">
                        <p
                            className="plus"
                            id="break-increment"
                            onClick={this.sendClick} >
                            +
                        </p>

                        <p id="break-length">{this.props.breakTime}</p>
                        <p
                            className="minus"
                            id="break-decrement"
                            onClick={this.sendClick}>
                            -
                        </p>
                    </div>
                </div>
            </div >
        );
    }

}

export default Config;