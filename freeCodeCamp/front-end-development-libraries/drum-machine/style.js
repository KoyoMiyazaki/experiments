const switchClass = () => {
    if (window.matchMedia('(max-width: 599px)').matches) {
        //スマホ処理
        const element = document.getElementById('drum-machine');
        element.classList = "container d-flex flex-column";
    } else if (window.matchMedia('(min-width:600px)').matches) {
        //タブレット、PC処理
        const element = document.getElementById('drum-machine');
        element.classList = "container d-flex flex-row";
    }
};

window.onload = switchClass;
window.onresize = switchClass;