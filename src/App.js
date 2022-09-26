import React from 'react';
import './App.scss';
import DrumPads from './components/DrumPads';

const drumDataBase = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: ''
    }

    this.playAudio = this.playAudio.bind(this);
    this.drumClick = this.drumClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown(event) {
    let id = event.key.toUpperCase();
    this.playAudio(id);
    this.setDisplay(id);
  }

  playAudio(src) {
    let audio = document.getElementById(src);
    audio.play();
  }

  drumClick(id) {
    this.playAudio(id);
    this.setDisplay(id);
  }

  setDisplay(id) {
    this.setState({
      display: id
    })
  }

  render() {
    return (
      <div>
        <header>
          <div id='drum-machine'>
            <div className='text-displayed'>
            </div>
            <div id='display'>
              <h1 >{this.state.display}</h1>

              {drumDataBase.map((elem, idx) => {
                return <DrumPads
                  id={elem.id}
                  url={elem.url}
                  keyTrigger={elem.keyTrigger}
                  drumClick={this.drumClick}
                  display={this.state.display}
                />
              })}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
