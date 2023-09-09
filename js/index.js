const list = [{
    keyTrigger: 'Q',
    keyCode: 81,
    soundName: 'Heater-1',
    soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
},
{
    keyTrigger: 'W',
    keyCode: 87,
    soundName: 'Heater-2',
    soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
},
{
    keyTrigger: 'E',
    keyCode: 69,
    soundName: 'Heater-3',
    soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
},
{
    keyTrigger: 'A',
    keyCode: 65,
    soundName: 'Heater-4',
    soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
},
{
    keyTrigger: 'S',
    keyCode: 83,
    soundName: 'Clap',
    soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
},
{
    keyTrigger: 'D',
    keyCode: 68,
    soundName: 'Open-HH',
    soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
},
{
    keyTrigger: 'Z',
    keyCode: 90,
    soundName: 'Kick-n\'-Hat',
    soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
},
{
    keyTrigger: 'X',
    keyCode: 88,
    soundName: 'Kick',
    soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
},
{
    keyTrigger: 'C',
    keyCode: 67,
    soundName: 'Closed-HH',
    soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}];

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Click or press a key',
            currentSound: ''
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    playSound = (e) => {
        const audioElement = document.getElementById(e.target.value);

        this.setState({
            text: 'Sound name',
            currentSound: e.target.id
        })

        console.log(this.state.currentSound);

        audioElement.currentTime = 0;
        audioElement.play();
    }

    handleKeyPress = (e) => {
        for(let a of list) {
            if(e.keyCode == a.keyCode) {
                const audioElement = document.getElementById(a.keyTrigger);

                this.setState({
                    text: 'Sound name',
                    currentSound: a.soundName
                })
                
                audioElement.currentTime = 0;
                audioElement.play();
            }
        }
    }

    render() {
        return (
            <div className="container" id="drum-machine">
                <h1 className="text-center" id="title">Drum Machine FCC</h1>
                <div className="container col-lg-8 p-4" id="box">
                    <div className="row">
                        <div className="col-md-8 row">
                            {list.map((x) => (
                                <div className="col-md-4">
                                    <button onClick={this.playSound} className="drum-pad w-100 btn btn-outline-dark btn-lg m-1" value={x.keyTrigger} id={x.soundName}>
                                        {x.keyTrigger}
                                        <audio className="clip" id={x.keyTrigger} src={x.soundSource}></audio>
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-4 row align-items-center" id="display">
                            <div className="">
                                <h6 className="text-center">{this.state.text}</h6>
                                <div className="bg-dark rounded">
                                    <p className="text-center text-white">{this.state.currentSound}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));