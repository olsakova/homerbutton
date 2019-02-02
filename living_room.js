
var donutHand = document.querySelector('.donutHand');
var clickCount = 0;


donutHand.onclick = function() {
  clickCount = clickCount + 1;

  if (clickCount == 1) {
    donutHand.classList.add('handLeave-active');
    window.setTimeout(animationFinished, 5100);
  }
}

function play(element){
  var audio = document.getElementById(element);
  audio.play();
}

