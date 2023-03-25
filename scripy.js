window.addEventListener('load', function () {
	if(this.localStorage.length>1){
	 var q = localStorage.getItem("lat");
	 var w = localStorage.getItem("long");
	 d.innerHTML = `<iframe src="https://maps.google.com/maps?q=${q}, ${w}&z=15&output=embed" width="760" height="470"
	frameborder="0" style="border:0"></iframe>`;
	}
})

var d = document.getElementById("map");
function getlocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPostion)
	}
	else{
 d.innerText = "Geolaction is not supported in this browser"
	}
}

function showPostion(position){
	var latitude = position.coords.latitude ; 
	var longitude = position.coords.longitude ; 
	localStorage.setItem("lat" , latitude );
	localStorage.setItem("long" , longitude );
	
	d.innerHTML = `<iframe src="https://maps.google.com/maps?q=${localStorage.getItem("lat")}, ${localStorage.getItem("long")}&z=15&output=embed" width="760" height="470"
	frameborder="0" style="border:0"></iframe>`;

}
function remove(){
	localStorage.removeItem("lat");
	localStorage.removeItem("long");
	d.innerHTML = "";
}