class ClockApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PassSec: 0,
            PassageId: "",
        }
        this.showPassage = this.showPassage.bind(this);
        this.startShowing = this.startShowing.bind(this);
        this.stopShowing = this.stopShowing.bind(this);
    }

    showPassage() {
        this.setState({
            PassSec: this.state.PassSec + 1,
        });
        let msg = "ボタンを押してから " + this.state.PassSec + " 秒が経過しました。";
        document.getElementById("PassageArea").innerHTML = msg;
        console.log("exec");
    }
    
    startShowing() {
        this.setState({
            PassSec: 0,
            PassageId: setInterval(this.showPassage, 1000),
        });
        document.getElementById("startcount").disabled = true;
    }
    
    stopShowing() {
        clearInterval(this.state.PassageId);
        document.getElementById("startcount").disabled = false;
    }

    render() {
        return (
            <div>
                <div className="counter">
                    <button
                      id="startcount"
                      onClick={this.startShowing}
                    >カウント開始
                    </button>
                    <button
                      id="endcount"
                      onClick={this.stopShowing}
                    >カウント停止
                    </button>
                </div>
                <div className="display">
                    <p id="PassageArea"></p>
                </div>
            </div>
        );
    }
}

let PassSec;


const target = document.querySelector('#app');
ReactDOM.render(<ClockApp />, target);