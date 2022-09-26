import { Component } from "react";

export default class DrumPads extends Component {

    render() {
        return (
            <div>

                <button 
                    className="drum-pad"
                    id={this.props.id}
                    onClick={() => this.props.drumClick(this.props.keyTrigger)}
                >
                    {this.props.keyTrigger}
                    <audio 
                        src={this.props.url}
                        className="clip"
                        id={this.props.keyTrigger}
                    >
                    </audio>
                </button>


            </div>
        )
    }
} 