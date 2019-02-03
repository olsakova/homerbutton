

var beerGlass = document.querySelector('.beerGlass');
var beerLiquid = document.querySelector('#liquid');
var clickCount = 0;
var toggleButton = document.querySelector('#button');

var scene1 = document.querySelector('.scene1');
var scene2 = document.querySelector('.scene2');


toggleButton.onclick = function() {
  window.location.href = './living_room.html';
  // scene1.classList.toggle('hidden');
  // scene2.classList.toggle('hidden');
}

beerLiquid.onclick = function() {
	if (beerGlass.classList.contains('full')){
		beerGlass.classList.add('drinking');
	    beerLiquid.classList.add('drinking');

		beerLiquid
		 $('#liquid') // I Said Fill 'Er Up!
	    .animate({
	      height: '0px'
	    }, 2500);

	    beerGlass.classList.remove('drinking');
	    beerLiquid.classList.remove('drinking');
	    beerGlass.classList.remove('full');
    }
    
    if (clickCount >= 3) {
      clickCount = 0;
      window.setTimeout(function() {
        location.href = './living_room.html';
      }, 3000);
    }
}

beerGlass.onclick = function() {
  beerGlass.classList.remove('beerGlass-active');
  beerLiquid.classList.remove('beerGlass-active');

  void beerGlass.offsetWidth;
  void beerLiquid.offsetWidth;

  clickCount = clickCount + 1;

  if (!beerGlass.classList.contains('drinking') && !beerGlass.classList.contains('beerGlass-active')) {
  	beerGlass.classList.add('beerGlass-active');
    beerLiquid.classList.add('beerGlass-active');
    beerGlass.classList.add('noClick');
    window.setTimeout(animationFinished, 5100);


  	$(document).ready(function() {
  $('.pour') //Pour Me Another Drink, Bartender!
  	// .reset()
    .delay(1000)
    .slideDown(500)
    .animate({
      height: '145px'
      }, 1500)
    .delay(1400)
    .slideUp(5);

  $('#liquid') // I Said Fill 'Er Up!
    .delay(2000)
    .animate({
      height: '100px'
    }, 2000);
  });

    beerGlass.classList.add('full');
  }
}

function animationFinished() {
        beerGlass.classList.remove('noClick');
}
