function App() {
    return (
        <div>
            <div class="split-window editor-window">
                <div class="editor-title">
                    <p><strong>Editor</strong></p>
                </div>
                <textarea name="" id="editor" ></textarea>
            </div>
            <div class="split-window previewer-window">
                <p class="previewer-title"><strong>Previewer</strong></p>
                <div id="preview"></div>
            </div>
        </div>
    );
}

const target = document.querySelector('#app');
ReactDOM.render(<App />, target);