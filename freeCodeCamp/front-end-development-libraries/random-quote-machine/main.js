document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('new-quote').addEventListener('click', function() {
        let quoteIndex = getRandomIndex(quoteList.length);
        let quote = quoteList[quoteIndex]["quote"];
        let author = quoteList[quoteIndex]["author"];
        document.getElementById('text-content').textContent = quote;
        document.getElementById('author-content').textContent = "- " + author;

        let bgColorIndex = getRandomIndex(bgColors.length);
        document.getElementsByTagName('body')[0].style.backgroundColor = bgColors[bgColorIndex];
        document.getElementsByClassName('fa-twitter-square')[0].style.color = bgColors[bgColorIndex];
        document.getElementById('new-quote').style.backgroundColor = bgColors[bgColorIndex];

        let url = encodeURI(`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote}" ${author}`);
        document.getElementById('tweet-quote').href = url;
    }, false);

    const requestURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    const request = new XMLHttpRequest();
    let quoteList = [];

    const bgColors = [
        "#ef857d",
        "#ffedab",
        "#a3d6cc",
        "#8d93c8",
        "#00afcc",
        "#79c06e",
    ];

    const setQuoteList = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            quoteList.push(arr[i]);
        }
    }

    const getRandomIndex = max => Math.floor(Math.random() * max);

    request.responseType = 'json';
    request.onload = function () {
        setQuoteList(request.response["quotes"]);
        let quoteIndex = getRandomIndex(quoteList.length);
        let quote = quoteList[quoteIndex]["quote"];
        let author = quoteList[quoteIndex]["author"];
        document.getElementById('text-content').textContent = quote;
        document.getElementById('author-content').textContent = "- " + author;
        
        let bgColorIndex = getRandomIndex(bgColors.length);
        document.getElementsByTagName('body')[0].style.backgroundColor = bgColors[bgColorIndex];
        document.getElementsByClassName('fa-twitter-square')[0].style.color = bgColors[bgColorIndex];
        document.getElementById('new-quote').style.backgroundColor = bgColors[bgColorIndex];

        let url = encodeURI(`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote}" ${author}`);
        document.getElementById('tweet-quote').href = url;
    }
    request.open('GET', requestURL);
    request.send();
}, false);
