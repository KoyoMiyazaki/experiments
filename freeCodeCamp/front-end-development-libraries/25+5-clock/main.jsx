
class TimerLengthControl extends React.Component {
    render() {
        return (
            <div id="timer-length-control" className="timer-length d-flex flex-row">
                <div id="break-label">
                    <div className="label-title">Break Length</div>
                    <div className="label-timer">
                        <button id="break-decrement">
                            <i class="fas fa-arrow-down"></i>
                        </button>
                        <span id="break-length">5</span>
                        <button id="break-increment">
                            <i class="fas fa-arrow-up"></i>
                        </button>
                    </div>
                </div>
                <div id="session-label">
                    <div className="label-title">Session Length</div>
                    <div className="label-timer">
                        <button id="session-decrement">
                            <i class="fas fa-arrow-down"></i>
                        </button>
                        <span id="session-length">25</span>
                        <button id="session-increment">
                            <i class="fas fa-arrow-up"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

class ClockApp extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 id="clock-title">25 + 5 Clock</h1>
                <TimerLengthControl />
                <div className="timer-wrapper">
                    <div id="timer-label">Session</div>
                    <div id="time-left">60:00</div>
                </div>
                <div className="timer-control">
                    <button id="start_stop">
                        <i class="fas fa-play"></i>
                        <i class="fas fa-pause"></i>
                    </button>
                    <button id="reset">
                        <i class="fas fa-sync-alt"></i>
                    </button>
                </div>
            </div>
        );
    }
}

const target = document.querySelector('#app');
ReactDOM.render(<ClockApp />, target);