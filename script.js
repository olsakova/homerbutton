

var beerGlass = document.querySelector('.beerGlass');
var beerLiquid = document.querySelector('#liquid');
var clickCount = 0;

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
}

beerGlass.onclick = function() {
  beerGlass.classList.remove('beerGlass-active');
  beerLiquid.classList.remove('beerGlass-active');

  clickCount = clickCount + 1;

  if (clickCount == 3 && !beerGlass.classList.contains('drinking') && !beerGlass.classList.contains('beerGlass-active')) {
  	beerGlass.classList.add('beerGlass-active');
    beerLiquid.classList.add('beerGlass-active');
  	$(document).ready(function() {
  $('.pour') //Pour Me Another Drink, Bartender!
  	// .reset()
    .delay(1000)
    .slideDown(500)
    .animate({
      height: '148px'
      }, 1500)
    .delay(1400)
    .slideUp(5);

  $('#liquid') // I Said Fill 'Er Up!
    .delay(2000)
    .animate({
      height: '100px'
    }, 2000);
  });
    clickCount = 0;
    beerGlass.classList.add('full');
  }
}

