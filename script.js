const catImage = document.querySelector('#cat');
const dogImage = document.querySelector('#dog');
const counter = document.querySelector('#counter');

let count = 0;

catImage.addEventListener('click', () => {
  count++;
  counter.innerText = count;
});

dogImage.addEventListener('click', () => {
  count--;
  counter.innerText = count;
});




var elem = document.getElementById('cat');
elem.addEventListener('click', function() {
  var counter = document.getElementById('counter');
  var currentValue = parseInt(counter.innerText);
  counter.innerText = currentValue + 1;
  counter.dataset.value = currentValue + 1;
}, false);

var elem = document.getElementById('dog');
elem.addEventListener('click', function() {
  var counter = document.getElementById('counter');
  var currentValue = parseInt(counter.innerText);
  counter.innerText = currentValue - 1;
  counter.dataset.value = currentValue - 1;
}, false);
