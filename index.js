const QSOUND = {
    keyCode: 81,
    soundName: 'Heater-1',
    soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}

const WSOUND = {
    keyCode: 87,
    soundName: 'Heater-2',
    soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}

const ESOUND = {
    keyCode: 69,
    soundName: 'Heater-3',
    soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}

const ASOUND = {
    keyCode: 65,
    soundName: 'Heater-4',
    soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}

const SSOUND = {
    keyCode: 83,
    soundName: 'Clap',
    soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}

const DSOUND = {
    keyCode: 68,
    soundName: 'Open-HH',
    soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}

const ZSOUND = {
    keyCode: 90,
    soundName: 'Kick-n\'-Hat',
    soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}

const XSOUND = {
    keyCode: 88,
    soundName: 'Kick',
    soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}

const CSOUND = {
    keyCode: 67,
    soundName: 'Closed-HH',
    soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}

const LIST = [QSOUND, WSOUND, ESOUND, ASOUND, SSOUND, DSOUND, ZSOUND, XSOUND, CSOUND]

class App extends React.Component {
    constructor(props) {
        super(props);

        this.audioRef = React.createRef();

        this.state = {
            soundName: '',
            soundSource: ''
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    playSound = (SOUND) => {
        const audioElement = this.audioRef.current;
        audioElement.pause();
        audioElement.currentTime = 0;
        this.setState(SOUND);
        audioElement.addEventListener('canplaythrough', () => {
            audioElement.play();
          });
    }

    handleKeyPress = (e) => {
        for(let n in LIST) {
            if(e.keyCode == LIST[n].keyCode) {
                this.playSound(LIST[n]);
            }
        }
    }

    render() {
        return (
            <div className="container" id="drum-machine">
                <h1 className="text-center py-5" id="title">Drum Machine</h1>
                <div className="container col-lg-8 p-5" id="display">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-4">
                                    <button onClick={() => this.playSound(QSOUND)} className="btn btn-lg btn-outline-dark w-100 my-1 drum-pad" id="q">Q</button>
                                </div>

                                <div className="col-md-4">
                                    <button onClick={() => this.playSound(WSOUND)} className="btn btn-lg btn-outline-dark w-100 my-1 drum-pad" id="w">W</button>
                                </div>

                                <div className="col-md-4">
                                    <button onClick={() => this.playSound(ESOUND)} className="btn btn-lg btn-outline-dark w-100 my-1 drum-pad" id="e">E</button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <button onClick={() => this.playSound(ASOUND)} className="btn btn-lg btn-outline-dark w-100 my-1 drum-pad" id="a">A</button>
                                </div>

                                <div className="col-md-4">
                                    <button onClick={() => this.playSound(SSOUND)} className="btn btn-lg btn-outline-dark w-100 my-1 drum-pad" id="s">S</button>
                                </div>

                                <div className="col-md-4">
                                    <button onClick={() => this.playSound(DSOUND)} className="btn btn-lg btn-outline-dark w-100 my-1 drum-pad" id="d">D</button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <button onClick={() => this.playSound(ZSOUND)} className="btn btn-lg btn-outline-dark w-100 my-1 drum-pad" id="z">Z</button>
                                </div>

                                <div className="col-md-4">
                                    <button onClick={() => this.playSound(XSOUND)} className="btn btn-lg btn-outline-dark w-100 my-1 drum-pad" id="x">X</button>
                                </div>

                                <div className="col-md-4">
                                    <button onClick={() => this.playSound(CSOUND)} className="btn btn-lg btn-outline-dark w-100 my-1 drum-pad" id="c">C</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <audio ref={this.audioRef} src={this.state.soundSource} preload="auto"></audio>
                            <h6 className="text-center display-6">Sound Name</h6>
                            <div className="bg-dark rounded my-4">
                                <p className="text-center text-white lead">{this.state.soundName}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));