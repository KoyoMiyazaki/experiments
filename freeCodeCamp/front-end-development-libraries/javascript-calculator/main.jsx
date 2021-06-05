class ResultDisplay extends React.Component {
    render() {
        return (
            <div id="display">
                <p className="result">{this.props.result}</p>
            </div>
        );
    }
}

class FormulaDisplay extends React.Component {
    render() {
        return (
            <div id="formula-display">
                <p className="formula">{this.props.formula}</p>
            </div>
        );
    }
}

class Buttons extends React.Component {
    render() {
        const commonClass="btn";
        return (
            <button
                id={this.props.id}
                className={`${commonClass} ${this.props.className}`}
                value={this.props.char}
                onClick={this.props.clickAction}
            >{this.props.char}
            </button>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '0',
            formula: '',
            lastInput: '',
        }
        this.handleOperators = this.handleOperators.bind(this);
        this.handleNumbers = this.handleNumbers.bind(this);
        this.initialize = this.initialize.bind(this);
        this.calculate = this.calculate.bind(this); 
    }

    handleOperators(event) {
        let inputOperator = event.target.value;

        if (inputOperator === '-') {
            if (this.state.formula.slice(-2) !== '--' && this.state.formula.slice(-2) !== '+-' && this.state.formula.slice(-2) !== 'X-' && this.state.formula.slice(-2) !== '/-') {
                this.setState({
                    formula: this.state.formula + inputOperator,
                });
            }
        } else {
            if (isNaN(this.state.lastInput)) {
                if (this.state.formula.slice(-2) === '--' || this.state.formula.slice(-2) === '+-' || this.state.formula.slice(-2) === 'X-' || this.state.formula.slice(-2) === '/-') {
                    this.setState({
                        formula: this.state.formula.slice(0, -2) + inputOperator,
                    });
                } else {
                    this.setState({
                        formula: this.state.formula.slice(0, -1) + inputOperator,
                    });
                }
            } else {
                this.setState({
                    formula: this.state.formula + inputOperator,
                });
            }
        }
        
        this.setState({
            result: inputOperator,
            lastInput: inputOperator,
        });
    }

    handleNumbers(event) {
        let inputNumber = event.target.value;
        if (this.state.result === '0' || this.state.lastInput === '=') {
            this.setState({
                result: inputNumber,
                formula: inputNumber,
            });
        } else if (this.state.lastInput === '+' || this.state.lastInput === '-' || this.state.lastInput === 'X' || this.state.lastInput === '/') {
            this.setState({
                result: inputNumber,
                formula: this.state.formula + inputNumber
            });
        } else {
            this.setState({
                result: this.state.result + inputNumber,
                formula: this.state.formula + inputNumber
            });
        }
        this.setState({
            lastInput: inputNumber,
        });
    }

    initialize() {
        this.setState({
            result: '0',
            formula: '',
            lastInput: '',
        });
    }

    calculate() {
        let calcResult = eval(this.state.formula.replace(/x/g, '*'));
        this.setState({
            result: calcResult,
            formula: `${this.state.formula}=${calcResult}`,
            lastInput: '=',
        });
    }

    render() {
        return (
            <div id="calculator" className="container">
                <FormulaDisplay formula={this.state.formula} />
                <ResultDisplay result={this.state.result} />

                <div className="d-flex flex-row" role="group">
                    <div className="btn-group d-flex flex-column">
                        <div className="btn-row">
                            <Buttons id="clear" className="btn-danger non-border-b" char="AC" clickAction={this.initialize} />
                            <Buttons id="divide" className="btn-secondary non-border-l non-border-b" char="/" clickAction={this.handleOperators} />
                        </div>
                        <div className="btn-row">
                            <Buttons id="seven" className="btn-outline-dark non-border-b" char="7" clickAction={this.handleNumbers} />
                            <Buttons id="eight" className="btn-outline-dark non-border-l non-border-b" char="8" clickAction={this.handleNumbers} />
                            <Buttons id="nine" className="btn-outline-dark non-border-l non-border-b" char="9" clickAction={this.handleNumbers} />
                        </div>
                        <div className="btn-row">
                            <Buttons id="four" className="btn-outline-dark non-border-b" char="4" clickAction={this.handleNumbers} />
                            <Buttons id="five" className="btn-outline-dark non-border-l non-border-b" char="5" clickAction={this.handleNumbers} />
                            <Buttons id="six" className="btn-outline-dark non-border-l non-border-b" char="6" clickAction={this.handleNumbers} />
                        </div>
                        <div className="btn-row">
                            <Buttons id="one" className="btn-outline-dark non-border-b" char="1" clickAction={this.handleNumbers} />
                            <Buttons id="two" className="btn-outline-dark non-border-l non-border-b" char="2" clickAction={this.handleNumbers} />
                            <Buttons id="three" className="btn-outline-dark non-border-l non-border-b" char="3" clickAction={this.handleNumbers} />
                        </div>
                        <div className="btn-row">
                            <Buttons id="zero" className="btn-outline-dark" char="0" clickAction={this.handleNumbers} />
                            <Buttons id="decimal" className="btn-outline-dark non-border-l" char="." />
                        </div>
                    </div>
                    <div className="btn-group">
                        <div className="btn-row d-flex flex-column">
                            <Buttons id="multiply" className="btn-secondary non-border-l non-border-b" char="x" clickAction={this.handleOperators} />
                            <Buttons id="subtract" className="btn-secondary non-border-l non-border-b" char="-" clickAction={this.handleOperators} />
                            <Buttons id="add" className="btn-secondary non-border-l non-border-b" char="+" clickAction={this.handleOperators} />
                            <Buttons id="equals" className="btn-primary non-border-l" char="=" clickAction={this.calculate} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const target = document.querySelector('#app');
ReactDOM.render(<Calculator />, target);