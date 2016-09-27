var ifClicked = 0, 
	ifSchimb = 0;

function iesSmile() {
		
	if (ifClicked%2 == 0) {
	
	
	
	document.getElementById('emoji-ul').style.opacity='1';
	document.getElementById('emoji-ul').style.transition='all 0.3s ease-in';

	ifClicked++;
	} else {
		
		
		document.getElementById('emoji-ul').style.opacity='0';
		document.getElementById('emoji-ul').style.transition='all 0.2s ease-out';
		
		ifClicked++;
	}
}

function schimb() {

	if (ifSchimb%2 == 0) {

		document.getElementById('sectiune-participanti').style.width='5%';
		document.getElementById('fereastra-chat').style.width='83.5%';

		document.getElementById('participanti-wapper').style.opacity='0';
		document.getElementById('participanti-wapper').style.display='none';

		document.getElementById('sectiune-participanti-redus').style.opacity='1';

		document.getElementById('sectiune-participanti').style.background='transparent';
		document.getElementById('sectiune-participanti').style["box-shadow"]='none';

		document.getElementById('titlu-participanti').style.opacity='0';
		document.getElementById('participanti-icon').style.opacity='0';

		ifSchimb++;
	} else {
	
		document.getElementById('sectiune-participanti').style.width='25%';
		document.getElementById('fereastra-chat').style.width='63.5%';

		document.getElementById('participanti-wapper').style.opacity='1';
		document.getElementById('participanti-wapper').style.display='initial';

		document.getElementById('sectiune-participanti-redus').style.opacity='0';

		document.getElementById('sectiune-participanti').style.background='#fff';
		document.getElementById('sectiune-participanti').style["box-shadow"]='2px 2px 10px #aaa';

		document.getElementById('titlu-participanti').style.opacity='1';
		document.getElementById('participanti-icon').style.opacity='1';

		ifSchimb++;
	}

}


function sendtext () {

	if (document.getElementById("textar").value!=="" ) {
		
		
			
		
			var y = document.getElementById("textar").value;
			console.log(y.search("-smile-"));
			if (cautaSmile()){
				var a = y.substr(0, y.search("-smile-"));
				var b = y.substr(y.search("-smile-")+7, length.y);
				console.log(a);
				var z = "<strong>Me</strong>: " + a + "<img src='img/smile.png' style='width:20px; height:20px;'>" + b + "<br>" ;
				console.log(z);
				var x = document.getElementById("fereastra-chat").innerHTML;
			    document.getElementById("fereastra-chat").innerHTML = x+ z;
			    document.getElementById("textar").value="";
			} else {
				var z = "<strong>Me</strong>: " + y + "<br>" ;
				var x = document.getElementById("fereastra-chat").innerHTML;
			    document.getElementById("fereastra-chat").innerHTML = x+ z;
			    document.getElementById("textar").value="";
		    }
		
	}
}

function cautaSmile() {
	var a=document.getElementById("textar").value;
	var b = document.getElementById("textar").value.search("-smile-");
	if (b==-1){
		return false;
	} else {
		return true;
	}
}

function pressEnt (e) {

	if (e.keyCode == 13) {
	if (document.getElementById("textar").value!=="" ) {
		sendtext();
			
		}
	}
}

function apareEmoji() {
		var y = document.getElementById("textar").value;
		var z = y + "-smile-";
		document.getElementById("textar").value= z;

}