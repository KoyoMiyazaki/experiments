'use strict';

{
    let button = document.querySelector('button');
    let result = document.querySelector('.result');

    button.addEventListener('click', function() {
        let form = document.querySelector('form');
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'sample.php');
        xhr.onload = function() {
            result.textContent = xhr.response;
        };
        xhr.send(new FormData(form));
    });
}