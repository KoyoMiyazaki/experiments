const testDom1 = function() {
    document.addEventListener('DOMContentLoaded', function() {
        const logo = document.getElementById('logo');
        const attrs = logo.attributes;
        for (let i = 0; i < attrs.length; i++) {
            let attr = attrs.item(i);
            console.log(attr.name + ':' + attr.value);
        }
    }, false); 
}

const testDom2 = function() {
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('result_text').textContent = '<a href="http://www.wings.msn.to/">WINGSプロジェクト</a>';
        document.getElementById('result_html').innerHTML = '<a href="http://www.wings.msn.to/">WINGSプロジェクト</a>';
    }, false);
}

const testDom3 = function() {
    document.addEventListener('DOMContentLoaded', function() {
        let list = document.getElementById('list');
        console.log(list.innerHTML);
        console.log(list.textContent);
    }, false);
}

testDom1();
testDom2();
testDom3();

