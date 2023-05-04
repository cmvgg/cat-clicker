var elem = document.getElementById('cat');
elem.addEventListener('click', function() {
    var counter = document.getElementById('counter');
    var currentValue = parseInt(counter.innerText);
    counter.innerText = currentValue + 1;
}, false);

var elem = document.getElementById('cat2');
elem.addEventListener('click', function() {
    var counter = document.getElementById('counter');
    var currentValue = parseInt(counter.innerText);
    counter.innerText = currentValue + 1;
}, false);

var elem = document.getElementById('dog');
elem.addEventListener('click', function() {
    var counter = document.getElementById('counter');
    var currentValue = parseInt(counter.innerText);
    counter.innerText = currentValue - 1;
}, false) ;


let catName = "Garfield";
let catImage = document.getElementById("cat");
catImage.setAttribute("title", catName);
