const testDom1 = function(id) {
    let current = new Date();
    let result = document.getElementById(id);

    result.textContent = current.toLocaleString();
}

const testDom2 = function(tag) {
    const list = document.getElementsByTagName(tag);

    for (let i = 0; i < list.length; i++) {
        console.log(list[i].href, list.item(i).className); 
    }
    // list.forEach(element => console.log(element));
}

const testDom3 = function(name, str) {
    const nam = document.getElementsByName(name);
    nam[0].value = str;
}

const testDom4 = function() {
    let list = document.querySelector('#list .external');
    for (let i = 0; i < list.length; i++) {
        console.log(list.item(i).textContent);
    }
}

const testDom5 = function() {
    let s = document.getElementById('food');
    let opts = s.childNodes;
    for (let i = 0; i < opts.length; i++) {
        let opt = opts.item(i);
        if (opt.nodeType === 1) {
            console.log(opt.value);
        }
    }
}

// メイン
testDom1('result');
testDom2('a');
testDom3('test', 'Arghhhhhhhhhhh');
testDom4();
testDom5();