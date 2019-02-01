

var beerGlass = document.querySelector('.beerGlass');
var beerLiquid = document.querySelector('#liquid');
var clickCount = 0;

beerLiquid.onclick = function() {
	 $('#liquid') // I Said Fill 'Er Up!
    .animate({
      height: '0px'
    }, 2500);
}

beerGlass.onclick = function() {
  beerGlass.classList.remove('beerGlass-active');
  beerLiquid.classList.remove('beerGlass-active');

  clickCount = clickCount + 1;

  if (clickCount == 3) {
  	$(document).ready(function() {
  $('.pour') //Pour Me Another Drink, Bartender!
    .delay(2000)
    .animate({
      height: '148px'
      }, 1500)
    .delay(1600)
    .slideUp(500);
  
  $('#liquid') // I Said Fill 'Er Up!
    .delay(3400)
    .animate({
      height: '100px'
    }, 2500);
  
  $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
    .delay(3400)
    .animate({
      bottom: '100px'
      }, 2500);
  });

    beerGlass.classList.add('beerGlass-active');
    beerLiquid.classList.add('beerGlass-active');
    clickCount = 0;
  }
}

// var drawing3 = document.querySelector('#homer1');
// drawing3.onload = function() {
//    drawImageScaled(drawing3, ctx1, 0, 0, 1)
// };

// var drawing2 = document.querySelector('#hand1');
// drawing2.onload = function() {
//
//    drawImageScaled(drawing2, ctx2, 0, 0, 1)
// };


// var canvas1 = document.querySelector('#layer-1');
// var canvas2 = document.querySelector('#layer-2');
// var canvas3 = document.querySelector('#layer-3');


// canvas1.width = canvas2.width = canvas3.width = window.innerWidth;
// canvas1.height = canvas2.height = canvas3.height = window.innerHeight;

// var ctx1 = canvas1.getContext('2d');
// var ctx2 = canvas2.getContext('2d');
// var ctx3 = canvas3.getContext('2d');

// function drawImageScaled(img, ctx, x, y, ratioM) {
//   var canvas = ctx.canvas;
//    var hRatio = canvas.width  / img.width    ;
//    var vRatio =  canvas.height / img.height  ;
//    var ratio  = Math.min ( hRatio, vRatio );
//    var centerShift_x = ( canvas.width - img.width*ratio ) / 2;
//    var centerShift_y = ( canvas.height - img.height*ratio ) / 2;
//    // ctx.clearRect(0,0,canvas.width, canvas.height);
//    ctx.drawImage(img, x,y, img.width, img.height,
//                       centerShift_x,centerShift_y,img.width*ratio*ratioM, img.height*ratio*ratioM);
// }



//
