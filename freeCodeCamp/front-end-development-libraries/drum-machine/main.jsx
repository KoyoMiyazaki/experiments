

const sound = () => { document.getElementById('sound-Heater-1' ).play(); };

let button = document.getElementById('Heater-1');
console.log(button);
button.onclick = sound;