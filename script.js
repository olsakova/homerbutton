var canvas = document.querySelector('.canvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state
    let progress = timing(timeFraction);

    draw(progress); // draw it

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}

function drawImageScaled(img, ctx) {
   var canvas = ctx.canvas ;
   var hRatio = canvas.width  / img.width    ;
   var vRatio =  canvas.height / img.height  ;
   var ratio  = Math.min ( hRatio, vRatio );
   var centerShift_x = ( canvas.width - img.width*ratio ) / 2;
   var centerShift_y = ( canvas.height - img.height*ratio ) / 2;
   // ctx.clearRect(0,0,canvas.width, canvas.height);
   ctx.drawImage(img, 0,0, img.width, img.height,
                      centerShift_x,centerShift_y,img.width*ratio, img.height*ratio);
}


var ctx = canvas.getContext('2d');
// ctx.fillStyle = 'rgb(0, 0, 0)';
// ctx.fillRect(0, 0, width, height);

// ctx.fillStyle = 'rgb(255, 0, 0)';
// ctx.fillRect(50, 50, 100, 150);

drawing = new Image();
drawing.src = "./graphics/LivingRoomNoArm_TVOFF.png"; // can also be a remote URL e.g. http://
drawing.onload = function() {
   drawImageScaled(drawing, ctx)
};



//
