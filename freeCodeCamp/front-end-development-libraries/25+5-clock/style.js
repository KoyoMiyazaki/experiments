const switchClass = () => {
    if (window.matchMedia('(max-width: 584px)').matches) {
        //スマホ処理
        const element = document.getElementById('timer-length-control');
        element.classList = "timer-length d-flex flex-column";
    } else if (window.matchMedia('(min-width:585px)').matches) {
        //タブレット、PC処理
        const element = document.getElementById('timer-length-control');
        element.classList = "timer-length d-flex flex-row";
    }
};

window.onload = switchClass;
window.onresize = switchClass;