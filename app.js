let catImage = document.getElementById('catImage');
let count = document.getElementById('count');
var counter = 0;

function counterClicks() {
    counter++;
    count.textContent = counter;
    }

catImage.addEventListener('click', function(){
    counterClicks();
}, false);




/*
var elem = document.getElementById('my-elem');
elem.addEventListener('click', function(){
  //the element has been clicked... do stuff here
}, false);

*/