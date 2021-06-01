

const sound = () => { document.getElementById('Q' ).play(); };

let button = document.getElementById('Heater-1');
console.log(button);
button.onclick = sound;

const target = document.querySelector('#app');
ReactDOM.render(<MarkdownPreviewer />, target);