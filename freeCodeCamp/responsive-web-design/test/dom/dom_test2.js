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

testDom1();
