const number = document.querySelector('#searchNumber');

loadEventListener();

function loadEventListener() {
    
    number.addEventListener('keyup',searchNumber)
}

function searchNumber(e){
    const value = $('select[name=selector]').val();
    const text = e.target.value.toLowerCase();
    console.log(text);
    var scriptTag = document.createElement('script');
    scriptTag.async = true;
    scriptTag.src = `http://numbersapi.com/${text}/${value}?callback=showNumber`;
    document.body.appendChild(scriptTag);
    showNumber;
}

function showNumber(str) {
    
    document.getElementById('number-fact').innerText = str;
}

(function() {
    var scriptTag = document.createElement('script');
    scriptTag.async = true;
    scriptTag.src = `http://numbersapi.com/${text}/math?callback=showNumber`;
    document.body.appendChild(scriptTag);
})();