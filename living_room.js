
var toggleButton = document.querySelector('#button');
var donutHand = document.querySelector('.donutHand');
var clickCount = 0;


window.onload = function() {
  donutHand.classList.add('handEnter-active');
}

donutHand.onclick = function() {
  donutHand.classList.remove('handLeave-active');

  donutHand.classList.remove('handEnter-active');

  donutHand.classList.add('handLeave-active');

  donutHand.classList.add('noClick');


  play('eating');
  donutHand.classList.add('handEnter-active');
  window.setTimeout(animationFinished, 0);

}

function animationFinished() {
  beerGlass.classList.remove('noClick');
}

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

toggleButton.onclick = function() {
  window.location.href = './index.html';
}
