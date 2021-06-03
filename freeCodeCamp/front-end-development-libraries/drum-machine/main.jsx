const keyStore = {
    "Q": {
        "id": "Heater-1",
        "soundSrc": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    "W": {
        "id": "Heater-2",
        "soundSrc": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    "E": {
        "id": "Heater-3",
        "soundSrc": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    "A": {
        "id": "Heater-4",
        "soundSrc": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    "S": {
        "id": "Clap",
        "soundSrc": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    "D": {
        "id": "Open-HH",
        "soundSrc": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    "Z": {
        "id": "Kick-n'-Hat",
        "soundSrc": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    "X": {
        "id": "Kick",
        "soundSrc": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    "C": {
        "id": "Closed-HH",
        "soundSrc": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
};

class ButtonGroup extends React.Component {
    render() {
        return (
            <div className="btn-group d-flex flex-column" role="group">
                <div className="btn-row">
                    <Button keyValue={"Q"} />
                    <Button keyValue={"W"} />
                    <Button keyValue={"E"} />
                </div>
                <div className="btn-row mt-1 mb-1">
                    <Button keyValue={"A"} />
                    <Button keyValue={"S"} />
                    <Button keyValue={"D"} />
                </div>
                <div className="btn-row">
                    <Button keyValue={"Z"} />
                    <Button keyValue={"X"} />
                    <Button keyValue={"C"} />
                </div>
            </div>
        );
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyValue: this.props.keyValue,
            id: keyStore[this.props.keyValue]["id"],
            soundSrc: keyStore[this.props.keyValue]["soundSrc"],
        }
        this.sound = this.sound.bind(this);
        this.soundKeyPress = this.soundKeyPress.bind(this);
    }

    sound() {
        document.getElementById(this.state.keyValue).play();
    };

    soundKeyPress(e) {
        document.getElementById(e.key.toUpperCase()).play();
        // console.log(e.key);
    }

    render() {
        return (
            <button
              type="button"
              id={this.state.id}
              className="btn btn-outline-primary drum-pad"
              onClick={this.sound}
              onKeyPress={this.soundKeyPress}>
              {this.state.keyValue}
              <audio 
                id={this.state.keyValue}
                className="clip"
                preload="auto"
                src={this.state.soundSrc}
              />
            </button>
            
        );
    }
}

class ControlGroup extends React.Component {
    render() {
        return (
            <div className="control-group d-flex flex-column">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                </div>
                <div id="display"><p><b>display area</b></p></div>
                <form>
                    <div className="form-group">
                      <label for="formControlRange">Volume</label>
                      <input type="range" className="form-control-range" id="formControlRange" />
                    </div>
                </form>
            </div>
        );
    }
}

class DrumMachine extends React.Component {
    render() {
        return (
            <div id="drum-machine" className="container d-flex flex-row">
                <ButtonGroup />
                <ControlGroup />
            </div>
        );
    }
}


const target = document.querySelector('#app');
ReactDOM.render(<DrumMachine />, target);

// let button = document.getElementById('Heater-1');
// console.log(button);
// button.onclick = sound;