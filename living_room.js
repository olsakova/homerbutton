
var toggleButton = document.querySelector('#button');
var donutHand = document.querySelector('.donutHand');
var donutBox = document.querySelector('.donutBox');
var clickCount = 0;
var donutCount = 6;
var iHaveDonut = false;

donutArray= new Array('graphics/Hand1.svg', 'graphics/Hand2.svg', 'graphics/Hand3.svg', 'graphics/Hand4.svg', 'graphics/Hand5.svg');

donutBoxArray = new Array('graphics/0box.svg', 'graphics/1box.svg', 'graphics/2box.svg', 'graphics/3box.svg', 'graphics/4box.svg', 'graphics/5box.svg', 'graphics/6box.svg');

donutBox.onclick = function() {
	if (clickCount == 0 && iHaveDonut == false){
		donutCount--;
		// document.getElementById("donutHand").src=donutArray[clickCount];	
		if (donutCount <= 0) {
			donutCount = 6;
		}
		document.getElementById("donutB").src=donutBoxArray[donutCount];

		iHaveDonut = true;
		// clickCount = clickCount + 1;
	  	donutHand.classList.add('handLeave-active');
	 	window.setTimeout(updateDonut, 1000);
	}
}

donutHand.onclick = function() {
	if (donutCount != 6 && iHaveDonut){
		clickCount = clickCount + 1;
	  	donutHand.classList.add('handLeave-active');
	 	window.setTimeout(updateDonut, 1000);
 	}
}

function updateDonut(){
	document.getElementById("donutHand").src=donutArray[clickCount];
	if (clickCount == donutArray.length - 1){
  		clickCount = 0;
  		iHaveDonut = false;
  	}
  	window.setTimeout(animationDone, 1000);
}

function animationDone(){
	donutHand.classList.remove('handLeave-active');
}

function play(element){
  var audio = document.getElementById(element);
  audio.play();
}

toggleButton.onclick = function() {
  window.location.href = './index.html';
}
