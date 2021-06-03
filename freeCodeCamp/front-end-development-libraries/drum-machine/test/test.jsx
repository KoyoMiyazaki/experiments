class ParentComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myVar: 'hoge'
        };
        this.hogeFunc = this.hogeFunc.bind(this);
    }

    hogeFunc() {
        this.setState({ myVar: 'changed' });
    }
    render() {
        return (
            <div>
                <ChildComponent dataHoge={() => { this.hogeFunc(); }} />
                {this.state.myVar}
            </div>
        );
    }
}

const propTypes = {
    dataHoge: PropTypes.func,
};

class ChildComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    clickButton() {
        return this.props.dataHoge();
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.clickButton(); }}>ボタン</button>
            </div>
        );
    }
}

ChildComponent.propTypes = propTypes;

const target = document.querySelector('#app');
ReactDOM.render(<ParentComponent />, target);
