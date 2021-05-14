document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        let name = document.getElementById('name');
        let url = document.getElementById('url');

        let anchor = document.createElement('a');
        anchor.href = url.value;
        
        let text = document.createTextNode(name.value);
        anchor.appendChild(text);

        let br = document.createElement('br');
        
        let list = document.getElementById('list');
        list.appendChild(anchor);
        list.appendChild(br);

    }, false);
}, false);