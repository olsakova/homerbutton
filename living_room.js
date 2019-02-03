
var toggleButton = document.querySelector('#button');
var donutHand = document.querySelector('.donutHand');
var donutBox = document.querySelector('.donutBox');
var clickCount = 0;
var donutCount = 3;
var iHaveDonut = false;

donutArray= new Array('graphics/Hand1.svg', 'graphics/Hand2.svg', 'graphics/Hand3.svg', 'graphics/Hand4.svg', 'graphics/Hand5.svg');

donutBoxArray = new Array('graphics/0box.svg', 'graphics/1box.svg', 'graphics/2box.svg', 'graphics/3box.svg');

donutBox.onclick = function() {
	if (clickCount == 0 && iHaveDonut == false){
		donutCount--;
		if (donutCount < 0 && !iHaveDonut) {
        	window.location.href = './index.html';
		}
		document.getElementById("donutB").src=donutBoxArray[donutCount];

		iHaveDonut = true;
	  	donutHand.classList.add('handLeave-active');
	 	window.setTimeout(updateDonut, 1000);
	 	play('woohoo');
	}
}

donutHand.onclick = function() {
	if (donutCount != 3 && iHaveDonut){
		clickCount = clickCount + 1;
	  	donutHand.classList.add('handLeave-active');
	  	donutHand.classList.add('noClick');
	 	window.setTimeout(updateDonut, 1000);
	 	play('eating');
 	} 
 	else if (!iHaveDonut) {
 		donutCount--;
		if (donutCount < 0) {
        	location.href = './index.html';
		}
		document.getElementById("donutB").src=donutBoxArray[donutCount];
		iHaveDonut = true;
	  	donutHand.classList.add('handLeave-active');
	 	window.setTimeout(updateDonut, 1000);
	 	play('woohoo');
 	}
 	else if (donutCount < 0 && !iHaveDonut) {
        window.location.href = './index.html';
	}
}

function updateDonut(){
	document.getElementById("donutHand").src=donutArray[clickCount];
	if (clickCount == donutArray.length - 1){
  		clickCount = 0;
  		iHaveDonut = false;
  		if (donutCount < 0) {
        	window.location.href = './index.html';
		}
  	}
  	window.setTimeout(animationDone, 1000);
}

function animationDone(){
	donutHand.classList.remove('handLeave-active');
	donutHand.classList.remove('noClick');
	if (donutCount < 0 && !iHaveDonut) {
        window.location.href = './index.html';
	}
}

function play(element){
  var audio = document.getElementById(element);
  audio.play();
}

toggleButton.onclick = function() {
  window.location.href = './index.html';
}
