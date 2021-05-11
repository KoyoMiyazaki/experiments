const testDom1 = function(id) {
    let current = new Date();
    let result = document.getElementById(id);

    result.textContent = current.toLocaleString();
}


testDom1('result');