class Display extends React.Component {
    render() {
        return (
            <div id="display">
                <p className="formula">1+1</p>
                <p className="result">9007199254740991</p>
            </div>
        );
    }
}

class Buttons extends React.Component {
    render() {
        return (
            <div className="d-flex flex-row" role="group">
                <div className="btn-group d-flex flex-column">
                    <div className="btn-row">
                        <button id="clear" className="btn btn-danger non-border-b" type="button">AC</button>
                        <button id="divide" className="btn btn-secondary non-border-l non-border-b" type="button">/</button>
                    </div>
                    <div className="btn-row">
                        <button id="seven" className="btn btn-outline-dark non-border-b" type="button">7</button>
                        <button id="eight" className="btn btn-outline-dark non-border-l non-border-b" type="button">8</button>
                        <button id="nine" className="btn btn-outline-dark non-border-l non-border-b" type="button">9</button>
                    </div>
                    <div className="btn-row">
                        <button id="four" className="btn btn-outline-dark non-border-b" type="button">4</button>
                        <button id="five" className="btn btn-outline-dark non-border-l non-border-b" type="button">5</button>
                        <button id="six" className="btn btn-outline-dark non-border-l non-border-b" type="button">6</button>
                    </div>
                    <div className="btn-row">
                        <button id="one" className="btn btn-outline-dark non-border-b" type="button">1</button>
                        <button id="two" className="btn btn-outline-dark non-border-l non-border-b" type="button">2</button>
                        <button id="three" className="btn btn-outline-dark non-border-l non-border-b" type="button">3</button>
                    </div>
                    <div className="btn-row">
                        <button id="zero" className="btn btn-outline-dark" type="button">0</button>
                        <button id="decimal" className="btn btn-outline-dark non-border-l" type="button">.</button>
                    </div>
                </div>
                <div className="btn-group">
                    <div className="btn-row d-flex flex-column">
                        <button id="multiply" className="btn btn-secondary non-border-l non-border-b" type="button">X</button>
                        <button id="subtract" className="btn btn-secondary non-border-l non-border-b" type="button">-</button>
                        <button id="add" className="btn btn-secondary non-border-l non-border-b" type="button">+</button>
                        <button id="equals" className="btn btn-primary non-border-l" type="button">=</button>
                    </div>
                </div>
                
                <div className="btn-row mt-1 mb-1">
                </div>
                <div className="btn-row">
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
        document.getElementById("display").textContent = keyStore[this.state.keyValue]["id"];
    };

    soundKeyPress(e) {
        document.getElementById(e.key.toUpperCase()).play();
        document.getElementById("display").textContent = keyStore[this.state.keyValue]["id"];
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

class Calculator extends React.Component {
    render() {
        return (
            <div id="calculator" className="container">
                <Display />
                <Buttons />
            </div>
        );
    }
}

const target = document.querySelector('#app');
ReactDOM.render(<Calculator />, target);