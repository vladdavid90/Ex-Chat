var ifClicked = 0, 
	ifSchimb = 0;

function iesSmile() {
		
	if (ifClicked%2 == 0) {
	
	
	
	document.getElementById('emoji-ul').style.visibility='visible';
	document.getElementById('emoji-ul').style.transition='all 0.1s ease-in';

	ifClicked++;
	} else {
		
		
		document.getElementById('emoji-ul').style.visibility='hidden';
		document.getElementById('emoji-ul').style.transition='all 0.1s ease-out';
		
		ifClicked++;
	}
}

function schimb() {

	if (ifSchimb%2 == 0) {

		document.getElementById('sectiune-participanti').style.width='5%';
		document.getElementById('fereastra-chat').style.width='83.5%';
		document.getElementById('participanti-wapper').style.display='none';
		document.getElementById('sectiune-participanti-redus').style.display='initial';
		ifSchimb++;
	} else {
	
		document.getElementById('sectiune-participanti').style.width='25%';
		document.getElementById('fereastra-chat').style.width='63.5%';
		document.getElementById('participanti-wapper').style.display='initial';
		document.getElementById('sectiune-participanti-redus').style.display='none';
		ifSchimb++;
	}

}


function sendtext () {

	if (document.getElementById("textar").value!=="" ) {
		var y = document.getElementById("textar").value;
		var z = "<strong>Me</strong>: " + y + "<br>" ;
		var x = document.getElementById("fereastra-chat").innerHTML;
	    document.getElementById("fereastra-chat").innerHTML = x+ z;
	    document.getElementById("textar").value="";
	}

	

}

function pressEnt (e) {

	if (e.keyCode == 13) {
	if (document.getElementById("textar").value!=="" ) {
		sendtext();
			
		}
	}
}